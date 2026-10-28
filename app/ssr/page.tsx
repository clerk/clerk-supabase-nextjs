import { connection } from "next/server";
import { createServerSupabaseClient } from "./client";
import AddTaskForm from "./AddTaskForm";

export default async function Home() {
  await connection();
  // Use the custom Supabase client you created
  const client = createServerSupabaseClient();

  // Query the 'tasks' table to render the list of tasks
  const { data, error } = await client.from("tasks").select();
  if (error) {
    throw error;
  }
  const tasks = data;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold tracking-tight">Tasks</h1>

      <div>
        {tasks?.map((task) => (
          <p key={task.id} className="mt-3 rounded-md bg-slate-50 px-3 py-2">
            {task.name}
          </p>
        ))}
      </div>

      <AddTaskForm />
    </div>
  );
}
