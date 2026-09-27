import type { Workout } from "../types/workout";
import WorkoutCard from "./workout-card";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({
  workouts,
}: WorkoutLibraryProps) => {
  return (
    <section
      id="library"
      className="mx-auto max-w-313.25 px-4 py-12 sm:px-6 lg:py-16"
    >

      <div className="mb-7">
        <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-xs text-[#92949B] sm:text-sm">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {workouts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#30343D] py-20 text-center">
          <h3 className="text-lg font-bold text-white">
            NO WORKOUTS FOUND
          </h3>

          <p className="mt-2 text-sm text-[#92949B]">
            We couldn&apos;t load the workout library.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkoutLibrary;