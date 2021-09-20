import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import MenuDetails from './MenuDetails';

const queryClient = new QueryClient();

describe('Smoke Test', () => {
  it('Renders MenuDetailsContainer ', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialentries="{['/menus/1']}">
          <MenuDetails />
        </MemoryRouter>
      </QueryClientProvider>,
      {}
    );
    const testId = screen.getByTestId('MenuDetailsContainer');
    expect(testId).toBeInTheDocument();
  });
});
