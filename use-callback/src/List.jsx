import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Updating Items");
    setItems(getItems(5));
  }, [getItems]);

  return (
    <div className="list">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default List;
