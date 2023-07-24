import { init } from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
// connect react-sentry
// Sentry:: stage, product 서버 모두 적용, 앱에서 추가해준 userAgent값(InApp)을 기준으로 웹/앱 접속을 구분하여 앱에서 접속했을 경우에만 sentry 실행
if (window.navigator.userAgent.indexOf("InApp") > -1) {
  init({
    dsn: import.meta.env.NODE_ENV === "production" ? import.meta.env.REACT_APP_SENTRY_DSN : "",
    release: "0.1.0",
    environment: import.meta.env.NODE_ENV,
    normalizeDepth: 6,
    tracesSampleRate: 1.0,
    integrations: [new Integrations.BrowserTracing()],
  });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      suspense: true,
    },
    mutations: {
      retry: 0,
      useErrorBoundary: true,
    },
  },
});

export let flutterInAppWebViewPlatformReady = false;
window.addEventListener("flutterInAppWebViewPlatformReady", function (event) {
  flutterInAppWebViewPlatformReady = true;
  console.log(`@@flutterInAppWebViewPlatformReady: ${flutterInAppWebViewPlatformReady}`);
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

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
  </React.StrictMode>,
);
