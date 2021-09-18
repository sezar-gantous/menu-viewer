import React from 'react';
import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<PageFooter />, {});
    const testId = screen.getByTestId('PageFooterContainer');
    expect(testId).toBeInTheDocument();
  });
});
