import { useState, useEffect } from "react";
import { QuickRanges } from "./QuickRanges";
import type { QuickRange } from "./QuickRanges";
import { CustomRangePicker } from "./CustomRangePicker";

type SuperDatePickerProps = {
  defaultStart?: Date;
  defaultEnd?: Date;
  onChange?: (range: { start: Date; end: Date }) => void;
  quickRanges: QuickRange[];
};

export const SuperDatePicker = ({
  defaultStart,
  defaultEnd,
  onChange,
  quickRanges,
}: SuperDatePickerProps) => {
  const [start, setStart] = useState<Date>(defaultStart ?? new Date());
  const [end, setEnd] = useState<Date>(defaultEnd ?? new Date());

  useEffect(() => {
    onChange?.({ start, end });
  }, [start, end, onChange]);

  const handleQuickRangeSelect = ({
    start,
    end,
  }: {
    start: Date;
    end: Date;
  }) => {
    setStart(start);
    setEnd(end);
  };

  return (
    <div className="p-6 border rounded-xl shadow-md w-full max-w-md bg-white dark:bg-gray-900 text-black dark:text-white space-y-4">
      <h2 className="text-xl font-semibold">Super Date Picker</h2>

      <div className="text-sm space-y-1">
        <div>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            From:
          </span>{" "}
          {start.toLocaleString()}
        </div>
        <div>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            To:
          </span>{" "}
          {end.toLocaleString()}
        </div>
      </div>

      <CustomRangePicker
        start={start}
        end={end}
        onChange={({ start, end }) => {
          setStart(start);
          setEnd(end);
        }}
      />

      <div>
        <h3 className="text-sm font-semibold mb-2">Quick ranges</h3>
        <QuickRanges ranges={quickRanges} onSelect={handleQuickRangeSelect} />
      </div>
    </div>
  );
};
