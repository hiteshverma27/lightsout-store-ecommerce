import "./App.css";
import {  Footer } from "./components";
import { Navigation } from "./components/navigation/Navigation";
import { Products } from "./pages";

function App() {
  return (
    <>
      <Navigation/>
      {/* <Home/> */}
      <Products />
      <Footer/>
    </>
  );
}

export default App;
