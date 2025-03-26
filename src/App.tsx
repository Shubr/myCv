import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import TestMe from "./Pages/TestMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/TestMe" element={<TestMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
