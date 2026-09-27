"use client";

import {
  Bookmark,
  CalendarPlus,
} from "lucide-react";
import { toast } from "react-toastify";

import type { Workout } from "../types/workout";
import { useFitlog } from "../context/fitlog-context";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({
  workout,
}: WorkoutActionsProps) => {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useFitlog();

  const handleAddToPlan = () => {
    if (plan.some((item) => item.id === workout.id)) {
      toast.info("This workout is already in today's plan.");
      return;
    }

    if (plan.length >= 5) {
      toast.warning("Today's plan can contain only 5 lifts.");
      return;
    }

    addToPlan(workout);

    toast.success("Added to today's plan.");
  };

  const handleSave = () => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.info("This workout is already saved.");
      return;
    }

    saveWorkout(workout);

    toast.success("Saved for later.");
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">

      <button
        onClick={handleAddToPlan}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C2F800] px-5 py-3 text-xs font-bold text-[#0C0D10] transition hover:brightness-110"
      >
        <CalendarPlus size={15} />
        Add to today&apos;s plan
      </button>

      <button
        onClick={handleSave}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-[#30343D] px-5 py-3 text-xs font-medium text-white transition hover:border-[#5A606C]"
      >
        <Bookmark size={15} />
        Save for later
      </button>

    </div>
  );
};

export default WorkoutActions;