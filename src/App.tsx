import "./App.css";
import { useState } from "react";

type TStudent = {
  name: string;
  class: string;
  age: number;
};
const students: TStudent[] = [
  { name: "Mai", age: 20, class: "FE42" },
  { name: "MaiA", age: 20, class: "FE42" },
  { name: "MaiB", age: 20, class: "FE42" },
];
function App() {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const handleIncrement = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      setCount(count + value);
    }
  };

  const handleDecrement = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      setCount(count - value);
    }
  };
  const renderStudents = () => {
    return students.map((studentItem, index) => {
      return (
        <li key={index}>
          {studentItem.name} - {studentItem.age} tuoi - {studentItem.class}
        </li>
      );
    });
  };

  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Submit</button>
      </div>

      <hr />
      <h3>Students</h3>
      <ul>{renderStudents()}</ul>
    </div>
  );
}

export default App;
