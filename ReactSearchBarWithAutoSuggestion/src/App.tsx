import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async (inputText: string) => {
      try {
        const response = await fetch("https://jsonplaceholder.org/users");
        const result = await response.json();
        const names = result.map(
          (res: { login: { username: string } }) => res.login.username
        );
        if (inputText=="") {
          setNames(names);
        } else {
          console.log("inputText else",inputText)
          setNames(names.filter((name: string) => name.includes(inputText)));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchNames(inputText);
  }, [inputText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container">
      <input onChange={(e) => handleChange(e)} placeholder="Search" />
      <div className="suggestionBox">
        {names?.map((name,index) => (
          <li key={name+index}>{name}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
