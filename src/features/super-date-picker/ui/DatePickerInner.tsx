import { useDatePicker } from "../model/useDatePicker";
import { ModeSwitcher } from "./ModeSwitcher";
import { AbsoluteRange } from "./AbsoluteRange";
import { RelativeRange } from "./RelativeRange";
import { PresetList } from "./PresetList";

export const DatePickerInner = () => {
  const { state } = useDatePicker();

  return (
    <div className="w-[360px] mx-auto p-4 border rounded shadow-sm">
      <div className="flex flex-col gap-4 min-h-[300px]">
        <ModeSwitcher />
        {state.dateMode === "absolute" && <AbsoluteRange />}
        {state.dateMode === "relative" && (
          <>
            <RelativeRange />
            <PresetList />
          </>
        )}
      </div>
    </div>
  );
};
