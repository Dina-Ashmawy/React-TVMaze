/**
 * Formats a given date string to a specified time zone using Intl.DateTimeFormat.
 * @param {string} dateString - The date string to format (should be in a format parsable by Date constructor).
 * @param {string} timeZone - The target time zone to format the date into.
 * @returns {string | null} The formatted date string in the specified time zone, or null if dateString is empty or invalid.
 */
export const formatDateToTimeZone = (
  dateString: string,
  timeZone: string,
): string | null => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return null;
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);

  return formattedDate;
};
