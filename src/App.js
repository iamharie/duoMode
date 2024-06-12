import { useState } from "react";
import "./styles.css";
import Control from "./contElements";
import One from "./One";

export default function App() {
  return (
    <div>
      {/* <One /> */}
      <Header />
      {/* <Control /> */}
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
    <div className="container">
      <p className="counter">{count}</p>
      <button className="btn" onClick={positive}>
        Increase
      </button>
      <button className="btn" onClick={negative}>
        Decrease
      </button>
    </div>
  );
}
