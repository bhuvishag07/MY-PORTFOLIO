import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Terminal from './components/Terminal/Terminal';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <ThemeToggle />
      <Navbar />
      <Terminal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
