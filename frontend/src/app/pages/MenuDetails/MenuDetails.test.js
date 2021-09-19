import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuDetails from './MenuDetails';

describe('Smoke Test', () => {
  it('Renders MenuDetailsContainer ', () => {
    render(<MenuDetails />, {});
    const testId = screen.getByTestId('MenuDetailsContainer');
    expect(testId).toBeInTheDocument();
  });
});
