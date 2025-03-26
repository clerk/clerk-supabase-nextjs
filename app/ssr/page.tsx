import { createClerkSupabaseClientSsr } from './client';
import AddTaskForm from './AddTaskForm';
import { Database } from '../../database.types';

export default async function Home() {
  // Use the custom Supabase client you created
  const client = createClerkSupabaseClientSsr();

  // Query the 'tasks' table to render the list of tasks
  const { data, error } = await client.from('tasks').select();
  if (error) {
    throw error;
  }
  const tasks = data;

  return (
    <div>
      <h1>Tasks</h1>

      <div>
        {tasks?.map((task: Database['public']['Tables']['tasks']['Row']) => (
          <p key={task.id}>{task.name}</p>
        ))}
      </div>

      <AddTaskForm />
    </div>
  );
}
