import logo from "./logo.svg";
import "./App.css";
import { usState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-headr">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
