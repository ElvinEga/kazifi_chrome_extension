"use client";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScanJobPage from "./pages/ScanJob";
import ResultsPage from "./pages/Results";
import HomePage from "./pages/Home";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-quill/dist/quill.snow.css";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/extension" element={<HomePage />} />
        <Route path="/scan" element={<ScanJobPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default App;
