import { useState } from "react";
import Data from "./Data";

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

function App() {
  const [url, setUrl] = useState(URLS.USERS);

  return (
    <>
      <div>USERS</div>
      <Data url={url} />
    </>
  );
}

export default App;
