import PreviousComponent from "./usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./useStateWithHistory/StateWithHistoryComponent";
import StorageComponent from "./useStorage/StorageComponent";
import AsyncComponent from "./useAsync/AsyncComponent";
import "./App.css";

function App() {
  // return <PreviousComponent />;
  // return <StateWithHistoryComponent />
  // return <StorageComponent />;
  return <AsyncComponent />
}

export default App;
