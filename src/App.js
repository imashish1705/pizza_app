import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  exact path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
