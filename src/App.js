import React from "react";
import { RenderRoutes } from "./routes";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <RenderRoutes />
    </>
  );
}

export default App;
