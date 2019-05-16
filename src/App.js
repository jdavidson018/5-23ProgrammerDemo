import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const items = [
    { id: 1, name: "hello" },
    { id: 2, name: "there" },
    { id: 3, name: "mate" }
  ];
  return (
    <div className="App">
      <Header items={items} />
    </div>
  );
}

export default App;
