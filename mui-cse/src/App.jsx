import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Academics from "./pages/Academics";
import Laboratories from "./pages/Laboratories";
import Placements from "./pages/Placements";
import Achievements from "./pages/Achievements";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/laboratories" element={<Laboratories />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;