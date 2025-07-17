import { DatePickerProvider } from "../model/provider";
import { DatePickerInner } from "./DatePickerInner";
import type { OnChangeCallback } from "../model/types";

export const SuperDatePicker = ({
  onChange,
}: {
  onChange?: OnChangeCallback;
}) => {
  return (
    <DatePickerProvider onChange={onChange}>
      <DatePickerInner />
    </DatePickerProvider>
  );
};
