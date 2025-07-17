import { useDatePicker } from "../model/useDatePicker";

const presets = [
  { label: "Last 15 minutes", from: "now-15m", to: "now" },
  { label: "Last 1 hour", from: "now-1h", to: "now" },
];

export const PresetList = () => {
  const { dispatch } = useDatePicker();

  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {presets.map((preset) => (
        <button
          key={preset.label}
          onClick={() => {
            dispatch({ type: "SET_MODE", payload: "relative" });
            dispatch({ type: "SET_RELATIVE_FROM", payload: preset.from });
            dispatch({ type: "SET_RELATIVE_TO", payload: preset.to });
            dispatch({ type: "SET_PRESET", payload: preset.label });
          }}
          className="px-3 py-1 text-sm border rounded bg-gray-100 hover:bg-gray-200"
        >
          {preset.label}
        </button>
      ))}
    </div>
  );
};
