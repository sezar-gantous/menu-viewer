import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Smoke Test', () => {
  it('Renders MenuGridContainer ', () => {
    render(<Home />, {});
    const testId = screen.getByTestId('MenuGridContainer');
    expect(testId).toBeInTheDocument();
  });
});
