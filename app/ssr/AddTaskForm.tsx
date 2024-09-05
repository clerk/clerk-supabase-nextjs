'use client';
import React, { useState } from 'react';
import { addTask } from './actions';
import { useRouter } from 'next/navigation';

function AddTaskForm() {
  const [taskName, setTaskName] = useState('');
  const router = useRouter();

  async function onSubmit() {
    await addTask(taskName);
    setTaskName('');
    router.refresh();
  }

  return (
    <form action={onSubmit}>
      <input
        autoFocus
        type="text"
        name="name"
        placeholder="Enter new task"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTaskForm;
