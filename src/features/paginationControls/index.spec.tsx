import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaginationControls from '.';

describe('PaginationControls Component', () => {
  it('renders correct number of page buttons based on currentLocalPage', () => {
    const currentLocalPage = 5;
    const onPageChangeMock = jest.fn();

    const { getAllByRole } = render(
      <PaginationControls
        currentLocalPage={currentLocalPage}
        onPageChange={onPageChangeMock}
      />,
    );

    const pageButtons = getAllByRole('button');
    expect(pageButtons).toHaveLength(10);
    expect(pageButtons[0]).toHaveTextContent('1');
    expect(pageButtons[1]).toHaveTextContent('2');
    expect(pageButtons[2]).toHaveTextContent('3');
    expect(pageButtons[0]).not.toHaveAttribute('disabled');
    expect(pageButtons[9]).not.toHaveAttribute('disabled');
  });

  it('calls onPageChange with correct page number when page button is clicked', () => {
    const currentLocalPage = 5;
    const onPageChangeMock = jest.fn();

    const { getByText } = render(
      <PaginationControls
        currentLocalPage={currentLocalPage}
        onPageChange={onPageChangeMock}
      />,
    );

    const pageButton = getByText('6');
    fireEvent.click(pageButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(6);
  });
});
