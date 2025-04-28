import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
function App() {
  const url = "https://dummyjson.com/products";
  return (
    <>
      <Main url={url} />
    </>
  );
}

export default App;
