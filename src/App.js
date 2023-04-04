import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navbar/Navbar";
import Landpage from "./Components/landpage/Landpage";
import AppSection from "./Components/AppSection/AppSection";
import Break from "./Components/Break/Break";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Scene from "./Components/Scene/Scene";

function App() {
  const fstBreakText = "Our Products";
  const sndBreakText = "your Products";
  return (
    <div>
      <Navigation />
      <Landpage />
      <AppSection />
      <Break content={fstBreakText} />
      <Products />
      <Break content={sndBreakText} />
      <About />
      <Scene />
    </div>
  );
}

export default App;
