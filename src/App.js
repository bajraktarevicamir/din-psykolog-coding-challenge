import { useEffect, useState } from "react";
import Launch from "./components/Launch";
import Title from "./components/Title";

function App() {
  const [launches, setLaunches] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches")
      .then((res) => res.json())
      .then((launch) => {
        setLaunches(launch[15]);
        setLoaded(true);
      });
  }, []);

  return (
    <div className="container-fluid">
      <Title />
      {isLoaded ? <Launch {...launches} /> : ""}
    </div>
  );
}

export default App;
