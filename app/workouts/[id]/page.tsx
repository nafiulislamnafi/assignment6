import { notFound } from "next/navigation";

import { getWorkout } from "../../lib/api";
import WorkoutDetail from "../../components/workout-detail";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutPage({
  params,
}: WorkoutPageProps) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetail workout={workout} />;
}