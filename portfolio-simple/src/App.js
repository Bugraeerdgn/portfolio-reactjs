import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Sayfa Bulunamadı</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;