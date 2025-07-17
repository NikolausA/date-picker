import { useDatePicker } from "../model/useDatePicker";

export const AbsoluteRange = () => {
  const { state, dispatch } = useDatePicker();

  if (state.dateMode !== "absolute") return null;

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <div className="flex flex-col w-full md:w-1/2">
        <label className="text-sm text-gray-600">From</label>
        <input
          type="datetime-local"
          className="border px-3 py-2 rounded text-sm w-[160px]"
          value={state.absolute.from}
          onChange={(e) =>
            dispatch({ type: "SET_ABSOLUTE_FROM", payload: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <label className="text-sm text-gray-600">To</label>
        <input
          type="datetime-local"
          className="border px-3 py-2 rounded text-sm w-[160px]"
          value={state.absolute.to}
          onChange={(e) =>
            dispatch({ type: "SET_ABSOLUTE_TO", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};
