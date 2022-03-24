import "./App.css";
import { Navigation, Footer } from "./components";
import { Products } from "./pages";

function App() {
  return (
    <>
      <Navigation/>
      {/* <Home/> */}
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
