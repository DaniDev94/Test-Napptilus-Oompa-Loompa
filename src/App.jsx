import React from "react";
import Header from "./components/Header/Header";
import FilterInput from "./components/FilterInput/FilterInput";
import "./App.css";

export default function App() {
  return (
    <div data-testid="App" className="App">
      <Header></Header>
      <FilterInput></FilterInput>
    </div>
  );
}
