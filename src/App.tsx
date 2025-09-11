import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import TestMe from "./Pages/TestMe";
import SGames from "./Pages/Games";
import FoodPriceGuess from "./Pages/sub-page/FoodPriceGuess";
import MakeInvoice from "./Pages/sub-page/InvoiceMaker";
// import { StrictMode } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/TestMe" element={<TestMe />}></Route>
        <Route path="/Games"  element={<SGames />}></Route>
        <Route path="/Pricedle" element={<FoodPriceGuess/>}></Route>
        <Route path="/MakeInvoice" element={<MakeInvoice/>}/>
      </Routes>
    </div>
  );
}

export default App;
