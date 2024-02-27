import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ScanJobPage from "./pages/ScanJob";
import ResultsPage from "./pages/Results";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/scan" element={<ScanJobPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default App;
