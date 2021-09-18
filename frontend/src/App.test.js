import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Smoke Test', () => {
  it('Renders PageHeader', () => {
    render(<App />, {});
    const testId = screen.getByTestId('PageHeaderContainer');
    expect(testId).toBeInTheDocument();
  });
  it('Renders FooterHeader', () => {
    render(<App />, {});
    const testId = screen.getByTestId('PageFooterContainer');
    expect(testId).toBeInTheDocument();
  });
});
