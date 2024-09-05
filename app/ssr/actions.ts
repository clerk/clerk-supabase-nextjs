'use server';

import { createClerkSupabaseClientSsr } from './client';

const client = createClerkSupabaseClientSsr();

export async function addTask(name: string) {
  try {
    const response = await client.from('tasks').insert({
      name,
    });

    console.log('Task successfully added!', response);
  } catch (error: any) {
    console.error('Error adding task:', error.message);
    throw new Error('Failed to add task');
  }
}
