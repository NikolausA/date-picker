import React from "react";
import { QuickRanges } from "../../../features/super-date-picker/ui/QuickRanges";
import type { QuickRange } from "../../../features/super-date-picker/ui/QuickRanges";

const quickRanges: QuickRange[] = [
  { label: "Last 15 minutes", from: "now-15m", to: "now" },
  { label: "Last 1 hour", from: "now-1h", to: "now" },
  { label: "Today", from: "now-0d", to: "now" },
  { label: "Last 7 days", from: "now-7d", to: "now" },
];

export const DateControlPanel = () => {
  const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
    console.log("Выбран диапазон:", start, end);
  };

  return (
    <div className="p-4 border rounded shadow w-[300px]">
      <h2 className="font-semibold mb-2">Quick ranges</h2>
      <QuickRanges ranges={quickRanges} onSelect={handleSelect} />
    </div>
  );
};
