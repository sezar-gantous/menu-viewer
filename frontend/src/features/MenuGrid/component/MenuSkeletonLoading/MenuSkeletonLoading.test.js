import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuSkeletonLoading from './MenuSkeletonLoading';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MenuSkeletonLoading />, {});
    const testId = screen.getByTestId('MenuSkeletonLoadingContainer');
    expect(testId).toBeInTheDocument();
  });
});
