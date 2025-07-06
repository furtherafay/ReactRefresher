import { use, useState, useEffect } from "react";
import "./App.css";

const Timer = () => {
  const [secs, setSecs] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setSecs((prev)=>prev+1)
    }, 1000);
    
  }, [])

  return (
    <div><h2>{secs}</h2></div>
  )
};

const App = () => {
  return <Timer />;
};

export default App;
