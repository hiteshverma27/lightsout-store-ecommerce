import "./App.css";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import { Home} from "./pages";

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
