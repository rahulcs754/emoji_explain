import { useState } from "react";
import "./styles.css";

export default function App() {
  var [counter, setcounter] = useState(0);

  const username = "rahul";
  const likeCounter = () => {
    counter = counter + 1;
    setcounter(counter);
  };

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Welcome {username}</h1>
      <button onClick={likeCounter}>Like</button>
      <h2>Like Counter: {counter}</h2>
    </div>
  );
}
