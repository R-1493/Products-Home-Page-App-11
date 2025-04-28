import "./App.css";
import Main from "./Components/main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const url = "https://dummyjson.com/products";
  return (
    <>
      <Main url={url} />
    </>
  );
}

export default App;
