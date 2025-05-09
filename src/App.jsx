import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import ScrollToTop from "./Component/ScrollToTop";
import Accueil from "./Pages/Accueil";
import Lacie from "./Pages/Lacie";
import Spectacles from "./Pages/Spectacles";
import Contact from "./Pages/Contact";
import Billeterie from "./Pages/Billeterie";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/lacie" element={<Lacie />} />
        <Route path="/spectacles" element={<Spectacles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/billeterie" element={<Billeterie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
