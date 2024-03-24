import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
