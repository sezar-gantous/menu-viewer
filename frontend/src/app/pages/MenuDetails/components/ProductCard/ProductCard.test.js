import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<ProductCard />, {});
    const testId = screen.getByTestId('ProductCardContainer');
    expect(testId).toBeInTheDocument();
  });
});
