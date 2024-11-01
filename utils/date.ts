import { Period } from '../screens/StatisticsScreen';

/**
 * Returns the date of the first day of the current week (Monday).
 */
export const getFirstDayOfCurrentWeek = (): Date => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const firstDay = new Date(date);
  // Adjust for Sunday (0) to get Monday (1)
  const firstDayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  firstDay.setDate(date.getDate() + firstDayOffset);
  return firstDay;
};

/**
 * Returns the date of the last day of the current week (Sunday).
 */
export const getLastDayOfCurrentWeek = (): Date => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const lastDay = new Date(date);
  // Adjust for Sunday (0) to get next Sunday (7)
  const lastDayOffset = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  lastDay.setDate(date.getDate() + lastDayOffset);
  return lastDay;
};

/**
 * Returns the date of the first day of the previous week (Monday).
 */
export const getFirstDayOfPreviousWeek = (): Date => {
  const firstDayOfCurrentWeek = getFirstDayOfCurrentWeek();
  const firstDayOfPreviousWeek = new Date(firstDayOfCurrentWeek);
  firstDayOfPreviousWeek.setDate(firstDayOfCurrentWeek.getDate() - 7);
  return firstDayOfPreviousWeek;
};

/**
 * Returns the date of the last day of the previous week (Sunday).
 */
export const getLastDayOfPreviousWeek = (): Date => {
  const lastDayOfCurrentWeek = getLastDayOfCurrentWeek();
  const lastDayOfPreviousWeek = new Date(lastDayOfCurrentWeek);
  lastDayOfPreviousWeek.setDate(lastDayOfCurrentWeek.getDate() - 7);
  return lastDayOfPreviousWeek;
};

/**
 * Returns the date of the first day of the previous month.
 */
export function getFirstDayOfPreviousMonth(): Date {
  const date = new Date();
  // Set the date to the first day of the current month
  date.setDate(1);
  // Subtract one month
  date.setMonth(date.getMonth() - 1);

  return date;
}

/**
 * Returns the date of the last day of the previous month.
 */
export const getLastDayOfPreviousMonth = (): Date => {
  const date = new Date();
  // Create a date object for the first day of the current month
  const firstDayOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
  );

  // Subtract one millisecond to get the last day of the previous month
  return new Date(firstDayOfCurrentMonth.getTime() - 1);
};

export const getDateRange = (
  period: Period,
): { startDate: Date; endDate: Date } => {
  switch (period) {
    case 'this-week':
      return {
        startDate: getFirstDayOfCurrentWeek(),
        endDate: getLastDayOfCurrentWeek(),
      };
    case 'previous-week':
      return {
        startDate: getFirstDayOfPreviousWeek(),
        endDate: getLastDayOfPreviousWeek(),
      };
    case 'previous-month':
      return {
        startDate: getFirstDayOfPreviousMonth(),
        endDate: getLastDayOfPreviousMonth(),
      };
    default:
      throw new Error('Invalid period');
  }
};

export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

export function formatToDashedDate(dateString: string): string {
  if (dateString.length !== 8) {
    return '';
  }
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);
  return `${year}-${month}-${day}`;
}
