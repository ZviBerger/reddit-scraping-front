import { useState } from "react";
import Post from "./Post";

const SearchContentTab = (props) => {
  const [searchKey, setSearchKey] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(props.service_url, {
      method: "POST",

      body: JSON.stringify({ search_content: searchKey.trim() }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  };
  //useEffect(() => {}, []);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          className="SearchInput"
          type="text"
          value={searchKey}
          placeholder={props.placeholder}
          onChange={(event) => setSearchKey(event.target.value)}
        />

        <input type="submit" value="Search" className="SearchButton" />
      </form>
      {loading && <div>Loading...</div>}
      <div className="PostContainer">
        {posts && posts.map((post) => <Post {...post} />)}
      </div>
    </div>
  );
};

export default SearchContentTab;
