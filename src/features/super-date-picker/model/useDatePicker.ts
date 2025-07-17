import { useContext } from "react";
import { DatePickerContext } from "./context";

export const useDatePicker = () => {
  const ctx = useContext(DatePickerContext);
  if (!ctx)
    throw new Error("useDatePicker must be used within a DatePickerProvider");
  return ctx;
};
