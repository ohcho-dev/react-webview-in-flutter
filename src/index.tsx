import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
    },
    mutations: {
      retry: 0,
      useErrorBoundary: true,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
