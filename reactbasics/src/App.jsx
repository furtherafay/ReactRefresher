import { useState } from "react";
import "./App.css";

const Card = ({ name }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    const newLiked = !liked;
    setLiked(newLiked)
    console.log(`${name} ${newLiked ? "liked" : "unlike"}`);
  };

  return (
    <div onClick={handleClick}>
      <h2>{name}</h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h2>Functional Arrow Component</h2>
      <Card name="Rafay" />
      <Card name="Ali" />
    </>
  );
};

export default App;
