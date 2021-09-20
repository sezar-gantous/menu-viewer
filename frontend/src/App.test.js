import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Smoke Test', () => {
  it('Renders PageHeader', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      {}
    );
    const testId = screen.getByTestId('PageHeaderContainer');
    expect(testId).toBeInTheDocument();
  });
  it('Renders FooterHeader', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      {}
    );
    const testId = screen.getByTestId('PageFooterContainer');
    expect(testId).toBeInTheDocument();
  });
});
