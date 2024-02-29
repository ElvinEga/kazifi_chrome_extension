import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { BrowserRouter as BrowserRouterRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouterRouter>
      <App />
    </BrowserRouterRouter>
  </React.StrictMode>
);
