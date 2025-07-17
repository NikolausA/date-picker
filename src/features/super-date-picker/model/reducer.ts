import type { DatePickerAction, DatePickerState } from "./types";

export const initialState: DatePickerState = {
  dateMode: "absolute",
  absolute: { from: "", to: "" },
  relative: { from: "", to: "" },
};

export function datePickerReducer(
  state: DatePickerState,
  action: DatePickerAction
): DatePickerState {
  switch (action.type) {
    case "SET_MODE":
      return { ...state, dateMode: action.payload };
    case "SET_ABSOLUTE_FROM":
      return {
        ...state,
        absolute: { ...state.absolute, from: action.payload },
      };
    case "SET_ABSOLUTE_TO":
      return { ...state, absolute: { ...state.absolute, to: action.payload } };
    case "SET_RELATIVE_FROM":
      return {
        ...state,
        relative: { ...state.relative, from: action.payload },
      };
    case "SET_RELATIVE_TO":
      return { ...state, relative: { ...state.relative, to: action.payload } };
    case "SET_PRESET":
      return { ...state, preset: action.payload };
    default:
      return state;
  }
}
