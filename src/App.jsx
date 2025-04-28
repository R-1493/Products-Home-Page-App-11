import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";

function App() {
  const url = "https://dummyjson.com/products";
  return (
    <>
      <Home url={url} />
    </>
  );
}

export default App;
