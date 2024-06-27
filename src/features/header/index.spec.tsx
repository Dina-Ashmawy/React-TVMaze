import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '.';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders TVMaze app name correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(getByText('TVMaze Explorer')).toBeInTheDocument();
  });

  it('renders link to home correctly', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const linkElement = getByRole('link', { name: 'TVMaze Explorer' });
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
