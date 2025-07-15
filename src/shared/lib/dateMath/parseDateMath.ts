import {
  addMinutes,
  subMinutes,
  addHours,
  subHours,
  addDays,
  subDays,
} from "date-fns";

type DateMathUnit = "m" | "h" | "d";

export function parseDateMath(
  expression: string,
  now: Date = new Date()
): Date {
  if (expression === "now") return now;

  const regex = /^now([+-])(\d+)([mhd])$/;
  const match = expression.match(regex);

  if (!match) {
    throw new Error(`Invalid date math expression: ${expression}`);
  }

  const [, operator, amountStr, unit] = match;
  const amount = parseInt(amountStr, 10);

  switch (unit as DateMathUnit) {
    case "m":
      return operator === "+"
        ? addMinutes(now, amount)
        : subMinutes(now, amount);
    case "h":
      return operator === "+" ? addHours(now, amount) : subHours(now, amount);
    case "d":
      return operator === "+" ? addDays(now, amount) : subDays(now, amount);
    default:
      throw new Error(`Unsupported unit: ${unit}`);
  }
}
