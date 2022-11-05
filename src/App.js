import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Home2021 from "./pages/Esummit2021/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/sponsors" element={<Sponsors />} />
        <Route exact path="/esummit2021" element={<Home2021 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
