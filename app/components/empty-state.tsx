import Link from "next/link";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

const EmptyState = ({
  title = "NOTHING HERE YET",
  description = "Browse the library and add a lift to get today moving.",
}: EmptyStateProps) => {
  return (
    <div className="flex min-h-70 flex-col items-center justify-center rounded-xl border border-dashed border-[#252832] px-6 text-center">

      <h2 className="text-lg font-black uppercase text-white">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-xs text-[#92949B]">
        {description}
      </p>

      <Link
        href="/"
        className="mt-5 rounded-full bg-[#C2F800] px-6 py-3 text-[11px] font-bold text-[#0C0D10] transition hover:brightness-110"
      >
        Go to workouts
      </Link>

    </div>
  );
};

export default EmptyState;