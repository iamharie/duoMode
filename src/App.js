import { useState } from "react"
import "./styles.css"


export default function App() {
  return(
    <Header/>
  )
}

function Header(){

let [count, setCount] = useState(0);

function positive(){
    setCount(count+1);
}
function negative(){
  setCount(count-1);
}

  return(
    <div>
<button className="btn" onClick={positive}>Increase</button>
<p>{count}</p>
<button className="btn" onClick={negative}>Decrease</button>
    </div>
  )
}