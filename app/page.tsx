import Hero from "./components/hero";
import WorkoutLibrary from "./components/workout-library";
import { getWorkouts } from "./lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />

      <WorkoutLibrary workouts={workouts} />
    </>
  );
}