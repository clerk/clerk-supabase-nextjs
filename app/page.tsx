'use client';
import { useEffect, useState } from 'react';
import { useSession, useUser } from '@clerk/nextjs';
import { createClient } from '@supabase/supabase-js';

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  // The `useUser()` hook will be used to ensure that Clerk has loaded data about the logged in user
  const { user } = useUser();
  // The `useSession()` hook will be used to get the Clerk session object
  const { session } = useSession();

  // Create a custom supabase client that injects the Clerk Supabase token into the request headers
  function createClerkSupabaseClient() {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!,
      {
        global: {
          // Get the custom Supabase token from Clerk
          fetch: async (url, options = {}) => {
            const clerkToken = await session?.getToken({
              template: 'supabase',
            });

            // Insert the Clerk Supabase token into the headers
            const headers = new Headers(options?.headers);
            headers.set('Authorization', `Bearer ${clerkToken}`);

            // Now call the default fetch
            return fetch(url, {
              ...options,
              headers,
            });
          },
        },
      }
    );
  }

  // Create a `client` object for accessing Supabase data using the Clerk token
  const client = createClerkSupabaseClient();

  // This `useEffect` will wait for the User object to be loaded before requesting
  // the tasks for the logged in user
  useEffect(() => {
    if (!user) return;

    async function loadTasks() {
      setLoading(true);
      const { data, error } = await client.from('tasks').select();
      if (!error) setTasks(data);
      setLoading(false);
    }

    loadTasks();
  }, [user]);

  async function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Insert task into the "tasks" database
    await client.from('tasks').insert({
      name,
    });
    window.location.reload();
  }

  return (
    <div>
      <h1>Tasks</h1>

      {loading && <p>Loading...</p>}

      {!loading &&
        tasks.length > 0 &&
        tasks.map((task: any) => <p>{task.name}</p>)}

      {!loading && tasks.length === 0 && <p>No tasks found</p>}

      <form onSubmit={createTask}>
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter new task"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
