import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScanJobPage from "./pages/ScanJob";
import ResultsPage from "./pages/Results";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/scan" element={<ScanJobPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default App;
