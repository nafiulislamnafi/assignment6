"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";
import { toast } from "react-toastify";

import type { Workout } from "../types/workout";

import { useFitlog } from "../context/fitlog-context";

interface PlanWorkoutCardProps {
  workout: Workout;
  isPlan: boolean;
}

const PlanWorkoutCard = ({
  workout,
  isPlan,
}: PlanWorkoutCardProps) => {
  const {
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitlog();
  const isDone = (workout as Workout & { done?: boolean }).done ?? false;

  const handleDone = () => {
    markAsDone(workout.id);

    toast.success(
      `${workout.name} marked as done`
    );
  };

  const handleRemove = () => {
    if (isPlan) {
      removeFromPlan(workout.id);
      toast.success(
        `${workout.name} removed from today's plan`
      );
    } else {
      removeFromSaved(workout.id);
      toast.success(
        `${workout.name} removed from saved`
      );
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-[#252831] bg-[#15171C] p-3 sm:flex-row sm:items-center sm:p-4 ${
        isDone
          ? "opacity-60"
          : ""
      }`}
    >

      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-28">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

    
      <div className="min-w-0 flex-1">

        <h3 className="truncate text-sm font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-[#858A95]">
          {workout.equipment}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-[#858A95]">

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

    
      <div className="flex flex-wrap items-center gap-2">

        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#30343D] px-4 py-2 text-[10px] text-white transition hover:bg-[#20242C]"
        >
          View Details
        </Link>

        {isPlan && !isDone && (
          <button
            type="button"
            onClick={handleDone}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#C2F800] px-4 py-2 text-[10px] font-bold text-[#0C0D10]"
          >
            <Check size={12} />

            Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove workout"
          className="p-2 text-[#737780] transition hover:text-white"
        >
          <X size={16} />
        </button>

      </div>
    </div>
  );
};

export default PlanWorkoutCard;