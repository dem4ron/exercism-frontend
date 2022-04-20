import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export function getTimeDifference(date: string) {
  const minDif = Math.abs(differenceInMinutes(new Date(date), new Date()));
  const hourDif = Math.abs(differenceInHours(new Date(date), new Date()));
  const dayDif = Math.abs(differenceInDays(new Date(date), new Date()));
  const weekDif = Math.abs(differenceInWeeks(new Date(date), new Date()));
  const monthDif = Math.abs(differenceInMonths(new Date(date), new Date()));
  const yearDif = Math.abs(differenceInYears(new Date(date), new Date()));

  if (yearDif >= 1) {
    return generateOutputString(yearDif, "year");
  } else if (monthDif >= 1) {
    return generateOutputString(monthDif, "month");
  } else if (weekDif >= 1) {
    return generateOutputString(weekDif, "week");
  } else if (dayDif >= 1) {
    return generateOutputString(dayDif, "day");
  } else if (hourDif >= 1) {
    return generateOutputString(hourDif, "hour");
  } else if (minDif >= 1) {
    return generateOutputString(minDif, "minute");
  } else return "now";
}

function generateOutputString(number: number, dateType: string) {
  let output = "";
  if (number > 1) {
    output = `${number} ${dateType}s ago`;
  } else {
    output = `${dateType === "hour" ? "an" : "a"} ${dateType} ago`;
  }

  return output;
}
