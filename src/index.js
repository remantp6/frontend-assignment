import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* Provide the client to App component */}
  <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
