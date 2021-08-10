import { useState } from "react-dom";
import "./styles.css";

export default function App() {
  const username = "rahul";
  var counter = 0;
  const likeCounter = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Welcome {username}</h1>
      <button onClick={likeCounter}>Like</button>
    </div>
  );
}
