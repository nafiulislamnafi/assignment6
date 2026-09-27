import type { Workout } from "../types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

function getWorkoutArray(data: unknown): Workout[] {
  if (Array.isArray(data)) {
    return data as Workout[];
  }

  if (
    typeof data === "object" &&
    data !== null &&
    "data" in data &&
    Array.isArray((data as { data: unknown }).data)
  ) {
    return (data as { data: Workout[] }).data;
  }

  if (
    typeof data === "object" &&
    data !== null &&
    "workouts" in data &&
    Array.isArray((data as { workouts: unknown }).workouts)
  ) {
    return (data as { workouts: Workout[] }).workouts;
  }

  return [];
}

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: unknown = await response.json();

  return getWorkoutArray(data);
}

export async function getWorkout(id: string): Promise<Workout | null> {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data: unknown = await response.json();

  if (
    typeof data === "object" &&
    data !== null &&
    "data" in data
  ) {
    return (data as { data: Workout }).data;
  }

  return data as Workout;
}