import { useDatePicker } from "../model/useDatePicker";

const options = [
  { label: "Now", value: "now" },
  { label: "Today", value: "now/d" },
  { label: "Last 15 minutes", value: "now-15m" },
  { label: "Last 1 hour", value: "now-1h" },
];

export const RelativeRange = () => {
  const { state, dispatch } = useDatePicker();

  if (state.dateMode !== "relative") return null;

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {["from", "to"].map((key) => (
        <div key={key} className="flex flex-col w-full md:w-1/2">
          <label className="text-sm text-gray-600 capitalize">{key}</label>
          <select
            className="border px-3 py-2 rounded text-sm w-[160px]"
            value={state.relative[key as "from" | "to"]}
            onChange={(e) =>
              dispatch({
                type: key === "from" ? "SET_RELATIVE_FROM" : "SET_RELATIVE_TO",
                payload: e.target.value,
              })
            }
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
