"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Workout } from "../types/workout";

interface FitlogContextType {
  plan: Workout[];
  saved: Workout[];
  doneIds: number[];
  hydrated: boolean;

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => boolean;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const FitlogContext = createContext<FitlogContextType | undefined>(
  undefined
);

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";
const DONE_STORAGE_KEY = "fitlog-done";

export const FitlogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
        const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);
        const storedDone = localStorage.getItem(DONE_STORAGE_KEY);

        if (storedPlan) {
          setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
          setSaved(JSON.parse(storedSaved));
        }

        if (storedDone) {
          setDoneIds(JSON.parse(storedDone));
        }
      } catch (error) {
        console.error("Failed to load FitLog data:", error);
      } finally {
        setHydrated(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      PLAN_STORAGE_KEY,
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      SAVED_STORAGE_KEY,
      JSON.stringify(saved)
    );
  }, [saved, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      DONE_STORAGE_KEY,
      JSON.stringify(doneIds)
    );
  }, [doneIds, hydrated]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    if (plan.length >= 5) {
      return false;
    }

    setPlan((current) => [...current, workout]);

    return true;
  };

  const removeFromPlan = (id: number) => {
    setPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );

    setDoneIds((current) =>
      current.filter((doneId) => doneId !== id)
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      return false;
    }

    setSaved((current) => [...current, workout]);

    return true;
  };

  const removeFromSaved = (id: number) => {
    setSaved((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const markAsDone = (id: number) => {
    setDoneIds((current) => {
      if (current.includes(id)) {
        return current;
      }

      return [...current, id];
    });
  };

  const value = useMemo(
    () => ({
      plan,
      saved,
      doneIds,
      hydrated,
      addToPlan,
      removeFromPlan,
      saveWorkout,
      removeFromSaved,
      markAsDone,
    }),
    [plan, saved, doneIds, hydrated, addToPlan, saveWorkout]
  );

  return (
    <FitlogContext.Provider value={value}>
      {children}
    </FitlogContext.Provider>
  );
};

export const useFitlog = () => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error(
      "useFitlog must be used inside FitlogProvider"
    );
  }

  return context;
};