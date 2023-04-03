import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navbar/Navbar";
import Landpage from "./Components/landpage/Landpage";
import AppSection from "./Components/AppSection/AppSection";

function App() {
  return (
    <div>
      <Navigation />
      <Landpage />
      <AppSection />
    </div>
  );
}

export default App;
