import React from "react";
import "./App.css";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import FooterComp from "./components/FooterComp/FooterComp";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <MainContent />
      <FooterComp />
    </div>
  );
}

export default App;
