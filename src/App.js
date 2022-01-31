import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import HeaderSearchBox from "./components/HeaderSearchBox";
import IpContext from "./context/IpContext";
function App() {
  const [location, setLocation] = useState({});
  const [position, setPosition] = useState([19.81432, 96.02123]);
  return (
    <>
      <IpContext.Provider value={{ location, setLocation }}>
        <HeaderSearchBox
          setLocation={setLocation}
          setPosition={setPosition}
          location={location}
        />
        <Map location={location} />
      </IpContext.Provider>
    </>
  );
}

export default App;
