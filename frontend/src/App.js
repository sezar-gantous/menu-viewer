import React from 'react';
import { PageHeader } from 'app/PageHeader';
import { PageFooter } from 'app/PageFooter';
import { Home } from 'app/pages/Home';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageHeader />
      <main>
        <Home />
      </main>
      <PageFooter />
    </QueryClientProvider>
  );
}

export default App;
