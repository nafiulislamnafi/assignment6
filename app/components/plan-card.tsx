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

interface PlanCardProps {
  workout: Workout;
  saved?: boolean;
}

const PlanCard = ({
  workout,
  saved = false,
}: PlanCardProps) => {
  const {
    doneIds,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitlog();

  const isDone = doneIds.includes(workout.id);

  const handleDone = () => {
    markAsDone(workout.id);
    toast.success(`${workout.name} marked as done.`);
  };

  const handleRemove = () => {
    if (saved) {
      removeFromSaved(workout.id);
      toast.info(`${workout.name} removed from saved.`);
    } else {
      removeFromPlan(workout.id);
      toast.info(`${workout.name} removed from today's plan.`);
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-[#252832] bg-[#15171D] p-3 sm:flex-row sm:items-center sm:p-4 ${
        isDone && !saved
          ? "opacity-60"
          : ""
      }`}
    >

      {/* Thumbnail */}
      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-32">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>

      {/* Information */}
      <div className="min-w-0 flex-1">

        <h3
          className={`text-sm font-bold uppercase text-white ${
            isDone && !saved
              ? "line-through"
              : ""
          }`}
        >
          {workout.name}
        </h3>

        <p className="mt-1 truncate text-xs text-[#92949B]">
          {workout.equipment}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-[#92949B]">

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

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2 sm:justify-end">

        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#30343D] px-4 py-2 text-[10px] text-white transition hover:border-[#5A606C]"
        >
          View Details
        </Link>

        {!saved && (
          <button
            onClick={handleDone}
            disabled={isDone}
            className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[10px] font-bold ${
              isDone
                ? "bg-[#30343D] text-[#92949B]"
                : "bg-[#C2F800] text-[#0C0D10]"
            }`}
          >
            <Check size={12} />

            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="flex h-8 w-8 items-center justify-center rounded-full text-[#737783] transition hover:bg-[#252832] hover:text-white"
        >
          <X size={15} />
        </button>

      </div>
    </div>
  );
};

export default PlanCard;