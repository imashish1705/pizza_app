import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  exact path="/products" element={<Products/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
