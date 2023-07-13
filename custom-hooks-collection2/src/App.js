import PreviousComponent from "./usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./useStateWithHistory/StateWithHistoryComponent";
import StorageComponent from "./useStorage/StorageComponent";
import AsyncComponent from "./useAsync/AsyncComponent";
import FetchComponent from "./useFetch/FetchComponent";
import "./App.css";

function App() {
  // return <PreviousComponent />;
  // return <StateWithHistoryComponent />
  // return <StorageComponent />;
  // return <AsyncComponent />
  return <FetchComponent />
}

export default App;
