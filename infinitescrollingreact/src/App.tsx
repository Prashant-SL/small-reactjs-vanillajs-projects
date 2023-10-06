import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 50 //this i got from the google
      ) {
        setCount(count + 100);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  const numbers = [];

  for (let i = 0; i < count; i++) {
    numbers.push(<li key={i + 1}>{i + 1}</li>);
  }

  return <>{numbers}</>;
}

export default App;
