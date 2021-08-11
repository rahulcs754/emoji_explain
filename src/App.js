import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍐": "Pear",
  "🍒": "Cherries",
  "🍅": "Tomato",
  "🍆": "Eggplant",
  "🥕": "Carrot",
  "🥦": "Broccoli",
  "🍞": "Bread",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🥚": "Egg",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw"
};

export default function App() {
  var [explain, setexplain] = useState("");

  const inputText = (e) => {
    var userInput = e.target.value;
    if (userInput) {
      if (userInput in emojiDictionary) {
        setexplain(emojiDictionary[userInput]);
      } else {
        setexplain("No Emoji Data Found");
      }
    } else {
      setexplain("Please enter some value");
    }
  };
  var list = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Welcome </h1>
      <input onChange={inputText} />
      <h3>Define: {explain}</h3>
      <hr />
      <ul>
        {list.map(function (element, index, array) {
          return <li> {array[index]} </li>;
        })}
      </ul>
    </div>
  );
}
