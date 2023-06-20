import "./App.css";
import React from "react";
import Footer from "./Footer";
import Body from "./Body";
import OptionsPage from "./OptionsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body step={1} />} />
        <Route
          path="/optionspage/:optionName"
          element={<OptionsPage step={2} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
