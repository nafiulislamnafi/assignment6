interface MetricsSummaryProps {
  exercises: number;
  minutes: number;
  caloriesBurned: number;
}

const MetricsSummary = ({
  exercises,
  minutes,
  caloriesBurned,
}: MetricsSummaryProps) => {
  const metrics = [
    {
      label: "Exercises",
      value: exercises,
      accent: true,
    },
    {
      label: "Minutes",
      value: minutes,
      accent: false,
    },
    {
      label: "Calories",
      value: caloriesBurned,
      accent: false,
    },
  ];

  return (
    <div className="mt-7 grid grid-cols-1 overflow-hidden rounded-xl border border-[#252831] bg-[#15171C] sm:grid-cols-3">

      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="px-5 py-5 sm:border-r sm:border-[#252831] last:sm:border-r-0"
        >
          <p className="text-xs text-[#858A95]">
            {metric.label}
          </p>

          <p
            className={`mt-1 text-3xl font-bold ${
              metric.accent
                ? "text-[#C2F800]"
                : "text-white"
            }`}
          >
            {metric.value}
          </p>
        </div>
      ))}

    </div>
  );
};

export default MetricsSummary;