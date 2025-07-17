import { useReducer, useEffect, type ReactNode } from "react";
import { DatePickerContext } from "./context";
import { datePickerReducer, initialState } from "./reducer";
import type { OnChangeCallback } from "./types";

export const DatePickerProvider = ({
  children,
  onChange,
}: {
  children: ReactNode;
  onChange?: OnChangeCallback;
}) => {
  const [state, dispatch] = useReducer(datePickerReducer, initialState);

  useEffect(() => {
    if (!onChange) return;

    const { dateMode, absolute, relative, preset } = state;
    const value = dateMode === "absolute" ? absolute : relative;

    const payload = {
      mode: dateMode,
      value,
      preset,
    };

    console.log("Выбранный диапазон:", payload);
    onChange(payload);
  }, [state, onChange]);

  return (
    <DatePickerContext.Provider value={{ state, dispatch }}>
      {children}
    </DatePickerContext.Provider>
  );
};
