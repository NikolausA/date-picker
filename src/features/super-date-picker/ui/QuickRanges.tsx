import React from "react";
import { parseDateMath } from "../../../shared/lib/dateMath/parseDateMath";

export type QuickRange = {
  label: string;
  from: string;
  to: string;
};

type Props = {
  ranges: QuickRange[];
  onSelect: (range: { start: Date; end: Date }) => void;
};

export const QuickRanges: React.FC<Props> = ({ ranges, onSelect }) => {
  return (
    <div className="flex flex-col gap-2">
      {ranges.map((range) => {
        const handleClick = () => {
          const start = parseDateMath(range.from);
          const end = parseDateMath(range.to);
          onSelect({ start, end });
        };

        return (
          <button
            key={range.label}
            onClick={handleClick}
            className="text-left px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm"
          >
            {range.label}
          </button>
        );
      })}
    </div>
  );
};
