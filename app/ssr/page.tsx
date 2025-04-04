import { createServerSupabaseClient } from "./client";
import AddTaskForm from "./AddTaskForm";

export default async function Home() {
  // Use the custom Supabase client you created
  const client = createServerSupabaseClient();

  // Query the 'tasks' table to render the list of tasks
  const { data, error } = await client.from("tasks").select();
  if (error) {
    throw error;
  }
  const tasks = data;

  return (
    <div>
      <h1>Tasks</h1>

      <div>
        {tasks?.map((task: any) => (
          <p key={task.id}>{task.name}</p>
        ))}
      </div>

      <AddTaskForm />
    </div>
  );
}
