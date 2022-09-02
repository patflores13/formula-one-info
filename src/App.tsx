import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <RecoilRoot>
      <h1>2022 Formula 1 Season</h1>
      <Calendar />
    </RecoilRoot>
  );
}

export default App;
