import { useState } from "react";
import "./styles.css";
import Control from "./contElements";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Control />
    </div>
  );
}

function Header() {
  let [count, setCount] = useState(0);

  function positive() {
    setCount(count + 1);
  }
  function negative() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button className="btn" onClick={positive}>
        Increase
      </button>
      <button className="btn" onClick={negative}>
        Decrease
      </button>
    </div>
  );
}
