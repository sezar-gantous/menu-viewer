import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <PageFooter />
    </QueryClientProvider>
  );
}

export default App;
