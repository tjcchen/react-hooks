import { useState, useId, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
// import Data from "./Data";
import Data from "./Data2";

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

function App() {
  const [url, setUrl] = useState(URLS.USERS);
  const id = useId();

  return (
    <>
      <div>
        <input
          type="radio"
          id={`${id}-users`}
          name="type"
          defaultChecked
          onClick={() => setUrl(URLS.USERS)}
        />
        <label htmlFor={`${id}-users`}>Users</label>
        <input
          type="radio"
          id={`${id}-posts`}
          name="type"
          onClick={() => setUrl(URLS.POSTS)}
        />
        <label htmlFor={`${id}-posts`}>Posts</label>
        <input
          type="radio"
          id={`${id}-comments`}
          name="type"
          onClick={() => setUrl(URLS.COMMENTS)}
        />
        <label htmlFor={`${id}-comments`}>Comments</label>
      </div>
      {/* with use hook */}
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Data url={url} shouldFetch />
        </Suspense>
      </ErrorBoundary>
      {/* traditional way of fetching */}
      {/* <Data url={url} /> */}
    </>
  );
}

export default App;
