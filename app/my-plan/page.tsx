"use client";

import { useMemo, useState } from "react";

import PlanCard from "../components/plan-card";
import EmptyState from "../components/empty-state";
import LoadingSpinner from "../components/loading-spinner";

import { useFitlog } from "../context/fitlog-context";

type Tab = "plan" | "saved";

type SortOption = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const { plan, saved, hydrated } = useFitlog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = useMemo(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });
  }, [currentList, sortBy]);

  const totalMinutes = useMemo(() => {
    return plan.reduce((total, workout) => total + workout.duration, 0);
  }, [plan]);

  const totalCalories = useMemo(() => {
    return plan.reduce((total, workout) => total + workout.caloriesBurned, 0);
  }, [plan]);

  if (!hydrated) {
    return <LoadingSpinner />;
  }

  return (
    <section className="mx-auto min-h-[calc(100vh-180px)] max-w-313.25 px-4 py-10 sm:px-6 lg:py-14">
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          MY PLAN
        </h1>

        <p className="mt-2 text-xs text-[#92949B] sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-7 grid grid-cols-1 overflow-hidden rounded-xl border border-[#252832] bg-[#15171D] sm:grid-cols-3">
        <Metric label="Exercises" value={plan.length} accent />

        <Metric label="Minutes" value={totalMinutes} />

        <Metric label="Calories" value={totalCalories} />
      </div>

      <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex w-fit rounded-lg border border-[#252832] bg-[#15171D] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-md px-4 py-2 text-[10px] font-medium transition ${
              activeTab === "plan"
                ? "bg-[#20242C] text-white"
                : "text-[#92949B]"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-md px-4 py-2 text-[10px] font-medium transition ${
              activeTab === "saved"
                ? "bg-[#20242C] text-white"
                : "text-[#92949B]"
            }`}
          >
            Saved
          </button>
        </div>

        <label className="flex items-center gap-2 text-xs text-[#92949B]">
          Sort By
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="rounded-md border border-[#30343D] bg-[#15171D] px-3 py-2 text-xs text-white outline-none"
          >
            <option value="duration">Duration</option>

            <option value="calories">Calories</option>

            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      <div className="mt-5 space-y-3">
        {sortedList.length === 0 ? (
          <EmptyState />
        ) : (
          sortedList.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              saved={activeTab === "saved"}
            />
          ))
        )}
      </div>
    </section>
  );
};

const Metric = ({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) => {
  return (
    <div className="border-b border-[#252832] px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="text-[11px] text-[#92949B]">{label}</p>

      <p
        className={`mt-1 text-3xl font-black ${
          accent ? "text-[#C2F800]" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default MyPlanPage;
