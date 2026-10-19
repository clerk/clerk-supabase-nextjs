"use server";

import { createServerSupabaseClient } from "./client";

const client = createServerSupabaseClient();

export async function addTask(name: string) {
  try {
    const response = await client.from("tasks").insert({
      name,
    });

    if (response.error) {
      throw response.error;
    }

    console.log("Task successfully added!");
  } catch (error) {
    console.error(
      "Error adding task:",
      error instanceof Error ? error.message : error,
    );
    throw new Error("Failed to add task");
  }
}
