"use client";
import { useEffect, useState } from "react";
import { useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  // The `useUser()` hook is used to ensure that Clerk has loaded data about the signed in user
  const { isLoaded, user } = useUser();
  // The `useSession()` hook is used to get the Clerk session object
  // The session object is used to get the Clerk session token
  const { session } = useSession();

  // Create a custom Supabase client that injects the Clerk session token into the request headers
  function createClerkSupabaseClient() {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        async accessToken() {
          return session?.getToken() ?? null;
        },
      }
    );
  }

  // This `useEffect` will wait for the User object to be loaded before requesting
  // the tasks for the signed in user
  useEffect(() => {
    if (!isLoaded) {
      return
    }

    if (!user) {
      setTasks([])
      setName('')
      setLoading(false)
      return
    }

    async function loadTasks() {
      setLoading(true)
      // Create a `client` object for accessing Supabase data using the Clerk token
      const client = createClerkSupabaseClient()
      const { data, error } = await client.from('tasks').select()
      if (!error) setTasks(data)
      setLoading(false)
    }

    loadTasks()
  }, [isLoaded, user])

  async function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) return

    // Create a `client` object for accessing Supabase data using the Clerk token
    const client = createClerkSupabaseClient()
    // Insert task into the "tasks" database
    const { data, error } = await client
      .from('tasks')
      .insert({
        name: trimmedName,
      })
      .select()
      .single()

    if (!error && data) {
      setTasks((currentTasks) => [...currentTasks, data])
      setName('')
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold tracking-tight">Tasks</h1>

      {loading && <p className="mt-4 text-slate-600">Loading...</p>}

      {isLoaded && !user && !loading && <p className="mt-4 text-slate-600">Sign in to view your tasks.</p>}

      {isLoaded &&
        user &&
        !loading &&
        tasks.length > 0 &&
        tasks.map((task: any) => (
          <p key={task.id} className="mt-3 rounded-md bg-slate-50 px-3 py-2">
            {task.name}
          </p>
        ))}

      {isLoaded && user && !loading && tasks.length === 0 && <p className="mt-4 text-slate-600">No tasks found</p>}

      {isLoaded && user && (
        <form onSubmit={createTask} className="mt-6 flex gap-3">
          <input
            autoFocus
            type="text"
            name="name"
            placeholder="Enter new task"
            className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit" className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700">
            Add
          </button>
        </form>
      )}
    </div>
  );
}
