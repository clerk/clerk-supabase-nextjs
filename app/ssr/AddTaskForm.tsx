"use client";
import React, { useState } from "react";
import { addTask } from "./actions";
import { useRouter } from "next/navigation";

function AddTaskForm() {
  const [taskName, setTaskName] = useState("");
  const router = useRouter();

  async function onSubmit() {
    await addTask(taskName);
    setTaskName("");
    router.refresh();
  }

  return (
    <form action={onSubmit} className="mt-6 flex gap-3">
      <input
        autoFocus
        type="text"
        name="name"
        placeholder="Enter new task"
        aria-label="Task name"
        className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <button
        type="submit"
        className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700"
      >
        Add
      </button>
    </form>
  );
}
export default AddTaskForm;
