import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageHeader from './PageHeader';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(
      <BrowserRouter>
        <PageHeader />
      </BrowserRouter>,
      {}
    );
    const testId = screen.getByTestId('PageHeaderContainer');
    expect(testId).toBeInTheDocument();
  });
});
