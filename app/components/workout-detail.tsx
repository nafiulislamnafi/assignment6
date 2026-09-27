import Image from "next/image";
import {
  Star,
} from "lucide-react";

import type { Workout } from "../types/workout";
import WorkoutActions from "./workout-actions";

interface WorkoutDetailProps {
  workout: Workout;
}

const WorkoutDetail = ({
  workout,
}: WorkoutDetailProps) => {
  return (
    <section className="mx-auto max-w-313.25 px-4 py-8 sm:px-6 lg:py-10">

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

        {/* LEFT IMAGE */}
        <div className="relative aspect-square overflow-hidden rounded-xl border border-[#252832] bg-[#15171D] lg:sticky lg:top-6 lg:h-fit">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT SIDE */}
        <div>

          <h1 className="text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#92949B]">
            {workout.description}
          </p>

          {/* Muscle groups */}
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold uppercase text-[#0C0D10]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-7 overflow-hidden rounded-xl border border-[#252832] bg-[#15171D]">

            <SpecRow
              label="EQUIPMENT"
              value={workout.equipment}
            />

            <SpecRow
              label="DIFFICULTY"
              value={workout.difficulty}
            />

            <SpecRow
              label="SETS"
              value={String(workout.sets)}
            />

            <SpecRow
              label="REPS"
              value={workout.reps}
            />

            <SpecRow
              label="DURATION"
              value={`${workout.duration} min`}
            />

            <SpecRow
              label="CALORIES"
              value={`${workout.caloriesBurned} kcal`}
            />

            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-[10px] font-medium text-[#92949B]">
                RATING
              </span>

              <span className="flex items-center gap-1 text-sm text-white">
                <Star
                  size={14}
                  className="fill-[#C2F800] text-[#C2F800]"
                />
                {workout.rating}
              </span>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-7">

            <h2 className="text-xs font-bold uppercase tracking-wide text-white">
              INSTRUCTIONS
            </h2>

            <ol className="mt-4 space-y-4">
              {workout.instructions.map(
                (instruction, index) => (
                  <li
                    key={`${workout.id}-${index}`}
                    className="flex gap-3 text-xs leading-5 text-[#B5B8C0]"
                  >
                    <span className="shrink-0 text-[#92949B]">
                      {index + 1}.
                    </span>

                    <span>
                      {instruction}
                    </span>
                  </li>
                )
              )}
            </ol>

          </div>

          {/* Actions */}
          <div className="mt-7">
            <WorkoutActions workout={workout} />
          </div>

        </div>
      </div>
    </section>
  );
};

const SpecRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-[#252832] px-4 py-4">
      <span className="text-[10px] font-medium text-[#92949B]">
        {label}
      </span>

      <span className="text-right text-xs text-white">
        {value}
      </span>
    </div>
  );
};

export default WorkoutDetail;