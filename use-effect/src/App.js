import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // 1. If no second dependencies argument specified, useEffect function
  // will be executed each time when we re-render our application, such as click the button
  // 2. If we add the second dependency parameter, the useEffect function will be executed
  // only when the dependency changes.
  // 3. If we set the second dependency to an empty array, the useEffect function will be executed
  // once when the component being mounted
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Post</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
