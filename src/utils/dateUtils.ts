/**
 * Formats a given date string to a specified time zone using Intl.DateTimeFormat.
 * @param {string} dateString - The date string to format (should be in a format parsable by Date constructor).
 * @param {string} timeZone - The target time zone to format the date into.
 * @returns {string} The formatted date string in the specified time zone.
 */
export const formatDateToTimeZone = (dateString: string, timeZone: string) => {
  const date = new Date(dateString);
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
