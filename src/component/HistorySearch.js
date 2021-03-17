import SearchContentTab from "./SearchContentTab";
import { useState } from "react";
import Navbar from "./Navbar";

const SearchTab = {
  Country: (
    <SearchContentTab service_url="http://localhost:8890/api/v1/store/filter/country" />
  ),
  Title: (
    <SearchContentTab service_url="http://localhost:8890/api/v1/store/filter/textual" />
  ),
  Votes: (
    <SearchContentTab service_url="http://localhost:8890/api/v1/store/filter/rating" />
  ),
};

const HistorySearch = () => {
  const [tabName, setTabName] = useState("Country");
  const setNavigation = (tabName) => {
    setTabName(tabName);
  };
  return (
    <div className="App">
      <Navbar
        defaultTab="Country"
        setNavigation={setNavigation}
        buttons={[
          { buttonId: "Country", buttonText: "Country" },
          { buttonId: "Title", buttonText: "Title" },
          { buttonId: "Votes", buttonText: "Votes" },
        ]}
      />
      {SearchTab[tabName]}
    </div>
  );
};

export default HistorySearch;
