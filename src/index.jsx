import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </React.StrictMode>
  </QueryClientProvider>
);
