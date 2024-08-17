import React  from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import 'boxicons';
import Header from "./components/Header";


function App() {
  return (
    
    <>
     {/* <Header /> */}
      <Navbar></Navbar>

      <Home></Home>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>


    </>
  );
}


export default App;
