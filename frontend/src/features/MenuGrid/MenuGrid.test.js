import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuGrid from './MenuGrid';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MenuGrid />, {});
    const testId = screen.getByTestId('MenuGridContainer');
    expect(testId).toBeInTheDocument();
  });
});
