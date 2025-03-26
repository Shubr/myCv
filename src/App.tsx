import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import TestMe from "./Pages/TestMe";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/TestMe" element={<TestMe />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
