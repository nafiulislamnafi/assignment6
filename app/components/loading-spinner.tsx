const LoadingSpinner = ({
  text = "Loading workouts…",
}: {
  text?: string;
}) => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-4">
      <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#292D35] border-t-[#C2F800]" />

      <p className="text-sm text-[#92949B]">
        {text}
      </p>
    </div>
  );
};

export default LoadingSpinner;