import { useDatePicker } from "../model/useDatePicker";

export const ModeSwitcher = () => {
  const { state, dispatch } = useDatePicker();
  const modes = ["absolute", "relative"] as const;

  return (
    <div className="inline-flex rounded overflow-hidden w-full shadow">
      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => dispatch({ type: "SET_MODE", payload: mode })}
          className={`w-full px-4 py-2 text-sm font-medium ${
            state.dateMode === mode
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-black border-b-0"
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );
};
