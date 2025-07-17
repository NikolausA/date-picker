import { createContext } from "react";
import type { ContextProps } from "./types";

export const DatePickerContext = createContext<ContextProps | undefined>(
  undefined
);
