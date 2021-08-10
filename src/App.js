import { useState } from "react";
import "./styles.css";

export default function App() {
  var [uservalue, setuservalue] = useState("");

  const inputText = (e) => {
    setuservalue(e.target.value);
  };

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Welcome </h1>
      <input onChange={inputText} />
      <h3>You type: {uservalue}</h3>
    </div>
  );
}
