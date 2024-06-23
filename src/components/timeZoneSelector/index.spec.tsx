import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeZoneSelector from '.';
import { TIME_ZONES } from '../../constants';

describe('TimeZoneSelector component', () => {
  const mockOnChange = jest.fn();

  it('renders without crashing', () => {
    const { container } = render(<TimeZoneSelector onChange={mockOnChange} />);
    expect(container).toBeInTheDocument();
  });

  it('renders the correct heading', () => {
    const { getByText } = render(<TimeZoneSelector onChange={mockOnChange} />);
    expect(getByText('Select Time Zone')).toBeInTheDocument();
  });

  it('renders the correct number of options', () => {
    const { getAllByRole } = render(
      <TimeZoneSelector onChange={mockOnChange} />,
    );
    const options = getAllByRole('option');
    expect(options.length).toBe(TIME_ZONES.length);
  });

  it('calls onChange with the correct value when an option is selected', () => {
    const { getByRole } = render(<TimeZoneSelector onChange={mockOnChange} />);
    const select = getByRole('combobox');

    fireEvent.change(select, { target: { value: TIME_ZONES[1].value } });
    expect(mockOnChange).toHaveBeenCalledWith(TIME_ZONES[1].value);
  });
});
