import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="App">
      <button onClick={() => navigate("/form")}>
        Composition Pattern example
      </button>
      <button onClick={() => navigate("/counter")}>
        Container-Presentational Component Pattern example
      </button>
      <button onClick={() => navigate("/toggle")}>
        Compound Component Pattern
      </button>
    </div>
  );
}

export default App;
