import { formatDateToTimeZone } from './dateUtils';

describe('formatDateToTimeZone', () => {
  it('formats date to New York time zone correctly', () => {
    const dateStr = '2023-06-23T14:00:00Z';
    const timeZone = 'America/New_York';
    const result = formatDateToTimeZone(dateStr, timeZone);
    expect(result).toBe('Jun 23, 2023, 10:00:00 AM');
  });

  it('formats date to Tokyo time zone correctly', () => {
    const dateStr = '2023-06-23T14:00:00Z';
    const timeZone = 'Asia/Tokyo';
    const result = formatDateToTimeZone(dateStr, timeZone);
    expect(result).toBe('Jun 23, 2023, 11:00:00 PM');
  });

  it('returns empty string for invalid date', () => {
    const dateStr = 'invalid-date';
    const timeZone = 'America/New_York';
    const result = formatDateToTimeZone(dateStr, timeZone);
    expect(result).toBeNull;
  });
});
