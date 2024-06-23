import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notification from '.';

describe('Notification Component', () => {
  it('renders message correctly', () => {
    const { getByText } = render(
      <Notification message="Test notification message" onClose={() => {}} />,
    );
    expect(getByText('Test notification message')).toBeInTheDocument();
  });

  it('calls onClose function when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Notification
        message="Test notification message"
        onClose={onCloseMock}
      />,
    );

    const closeButton = getByText('X');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
