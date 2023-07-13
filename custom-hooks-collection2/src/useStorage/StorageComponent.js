import { useSessionStorage, useLocalStorage } from "./useStorage";

const StorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage("name", "Andy");
  const [age, setAge, removeAge] = useLocalStorage("age", 25);

  return (
    <div>
      <div>{name} - {age}</div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(18)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
};

export default StorageComponent;
