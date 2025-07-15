import DatePicker from "react-datepicker";

type CustomRangePickerProps = {
  start: Date;
  end: Date;
  onChange: (range: { start: Date; end: Date }) => void;
};

export const CustomRangePicker = ({
  start,
  end,
  onChange,
}: CustomRangePickerProps) => {
  const handleStartChange = (date: Date | null) => {
    if (date) onChange({ start: date, end });
  };

  const handleEndChange = (date: Date | null) => {
    if (date) onChange({ start, end: date });
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          From
        </label>
        <DatePicker
          selected={start}
          onChange={handleStartChange}
          showTimeSelect
          dateFormat="Pp"
          className="w-full px-3 py-2 border rounded-md shadow-sm text-sm bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          To
        </label>
        <DatePicker
          selected={end}
          onChange={handleEndChange}
          showTimeSelect
          dateFormat="Pp"
          className="w-full px-3 py-2 border rounded-md shadow-sm text-sm bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      </div>
    </div>
  );
};
