import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Modal from "react-modal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      suspense: true,
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

Modal.setAppElement("#root");

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
