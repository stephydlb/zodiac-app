import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

test('renders header with logo', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen.getByText('✨ Zodiac')).toBeInTheDocument();
});
