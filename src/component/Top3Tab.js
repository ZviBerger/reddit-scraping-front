import "../App.css";
import { useState } from "react";
import Post from "./Post";

const Top3Tab = (props) => {
  const [country, setCountry] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:8888/api/v1/reddit-top-3/" + country)
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
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />

        <input type="submit" value="Search" className="SearchButton" />
      </form>
      {loading && <div>Loading...</div>}
      <div className="PostContainer">
        {posts && posts.map((post, i) => <Post key={i} {...post} />)}
      </div>
    </div>
  );
};

export default Top3Tab;
