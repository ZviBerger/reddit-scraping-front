import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Top3Tab from "./component/Top3Tab";
import HistorySearch from "./component/HistorySearch";
const App = () => {
  const [tabName, setTabName] = useState("TOP");
  const setNavigation = (tabName) => {
    setTabName(tabName);
  };
  return (
    <div className="App">
      <Navbar
        real={true}
        defaultTab="TOP"
        setNavigation={setNavigation}
        buttons={[
          { buttonId: "TOP", buttonText: "Top 3 By Country" },
          { buttonId: "HST", buttonText: "History Search" },
        ]}
      />
      <div className="App-header">
        {tabName === "TOP" && <Top3Tab />}
        {tabName === "HST" && <HistorySearch />}
      </div>
    </div>
  );
};

export default App;
