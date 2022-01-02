import React from "react";
import About from "./components/about/about";
import Activities from "./components/activities/activities";
import Donaton from "./components/donation/donaton";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Join from "./components/join/join";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Join />
      <About />
      <Activities />
      <Donaton />
      <Footer />
    </>
  );
}

export default App;
