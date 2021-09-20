import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Home';

const queryClient = new QueryClient();

describe('Smoke Test', () => {
  it('Renders MenuGridContainer ', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
      {}
    );
    const testId = screen.getByTestId('MenuGridContainer');
    expect(testId).toBeInTheDocument();
  });
});
