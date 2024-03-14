import "./App.css";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import About from "./components/About";
import ThreeEqualBoxes from "./components/ThreeEqualBoxes";
// import Excess from "./components/Excess";

function App() {
  return (
    <div>
      <Home />
      <Services />
      <About />
      <ContactUs />
      <ThreeEqualBoxes />
      {/* <Excess /> */}
    </div>
  );
}

export default App;
