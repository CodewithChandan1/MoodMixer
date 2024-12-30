
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoodPlayer from './pages/MoodPlayer';
import MemeGenerator from './pages/MemeGenerator';
import MemeDetails from './pages/MemeDetails';
import EscapeRoom from './pages/EscapeRoom';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Navigation from './components/Navigation';
import { Footer } from './components/Footer';
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood-player" element={<MoodPlayer />} />
        <Route path="/meme-generator" element={<MemeGenerator />} />
        <Route path="/meme/:id" element={<MemeDetails />} />
        <Route path="/escape-room" element={<EscapeRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;