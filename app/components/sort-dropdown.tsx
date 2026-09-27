import { ChevronDown } from "lucide-react";

type SortOption =
  | "duration"
  | "calories"
  | "rating";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortDropdown = ({
  value,
  onChange,
}: SortDropdownProps) => {
  return (
    <label className="flex items-center gap-2 text-xs text-[#858A95]">
      <span>Sort By</span>

      <div className="relative">
        <select
          value={value}
          onChange={(event) =>
            onChange(
              event.target.value as SortOption
            )
          }
          className="appearance-none rounded-md border border-[#30343D] bg-[#15171C] py-2 pl-3 pr-8 text-xs text-white outline-none"
        >
          <option value="duration">
            Duration
          </option>

          <option value="calories">
            Calories
          </option>

          <option value="rating">
            Rating
          </option>
        </select>

        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#858A95]"
        />
      </div>
    </label>
  );
};

export default SortDropdown;