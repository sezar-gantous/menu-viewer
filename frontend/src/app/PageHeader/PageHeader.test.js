import React from 'react';
import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<PageHeader />, {});
    const testId = screen.getByTestId('PageHeaderContainer');
    expect(testId).toBeInTheDocument();
  });
});
