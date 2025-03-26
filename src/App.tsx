import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import TestMe from "./Pages/TestMe";
// import { StrictMode } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/TestMe" element={<TestMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
