export type DatePickerState = {
  dateMode: "absolute" | "relative";
  absolute: { from: string; to: string };
  relative: { from: string; to: string };
  preset?: string;
};

export type DatePickerAction =
  | { type: "SET_MODE"; payload: "absolute" | "relative" }
  | { type: "SET_ABSOLUTE_FROM"; payload: string }
  | { type: "SET_ABSOLUTE_TO"; payload: string }
  | { type: "SET_RELATIVE_FROM"; payload: string }
  | { type: "SET_RELATIVE_TO"; payload: string }
  | { type: "SET_PRESET"; payload: string };

export type OnChangeCallback = (payload: {
  mode: "absolute" | "relative";
  value: { from: string; to: string };
  preset?: string;
}) => void;

export type ContextProps = {
  state: DatePickerState;
  dispatch: React.Dispatch<DatePickerAction>;
};
