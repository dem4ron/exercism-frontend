import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundry } from "./components/ErrorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </React.StrictMode>
);
