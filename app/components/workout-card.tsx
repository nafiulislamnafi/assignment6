import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

import type { Workout } from "../types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-lg border border-[#252832] bg-[#15171D] transition duration-200 hover:-translate-y-1 hover:border-[#3A3F49]"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-3">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#C2F800] px-2 py-0.5 text-[8px] font-bold uppercase text-[#0C0D10]"
            >
              {group}
            </span>
          ))}
        </div>

        <h2 className="truncate text-[12px] font-bold uppercase text-white sm:text-[13px]">
          {workout.name}
        </h2>

        <p className="mt-1 truncate text-[10px] text-[#92949B]">
          {workout.equipment}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#252832] pt-3 text-[9px] text-[#92949B]">
          <span className="flex items-center gap-1">
            <Clock3 size={11} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={11} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={11} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
