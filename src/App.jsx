import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";
import LanguageProvider from "./context/LanguageProvider";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollReveal />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/projekti" element={<Projects />} />
          <Route path="/projekti/:slug" element={<ProjectDetails />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
