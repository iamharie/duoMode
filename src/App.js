import { useState } from "react";
import "./styles.css";
import Control from "./contElements";
const arr = [
  { id: 1, name: "bag" },
  { id: 2, name: "box" },
];
export default function App() {
  return (
    <div>
      <One />
      <Header />
      <Control />
    </div>
  );
}

// counter

function One() {
  return (
    <div>
      {arr.map((mov) => (
        <Item name={mov} key={mov.id} />
      ))}

      {/* <Item name={arr.map((mov) => mov)} /> */}
    </div>
  );
}

function Item({ name }) {
  return (
    <div>
      <p>{name.id}</p>
      <p>{name.name}</p>
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

//
