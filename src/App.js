// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages / Components
import PasswordPage from './components/Landing/Landing';
import HomePage from './components/Home/Home';
import Layout from './components/ChatLayout/ChatLayout';
import Accomplish from './components/Accomplish/Accomplish';
import HurdlesPage from './components/HurdlesPage/HurdlesPage';
import AboutTheRace from './components/About/About';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import SpeakersPage from './components/SpeakersPage/SpeakersPage';
import Footer from './components/Footer/Footer'; 
import Alphabet from './components/Alphabet/Alphabet'; // <-- Import Alphabet

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing / Password page */}
        <Route path="/" element={<PasswordPage />} />

        {/* Home page: scrollable sections */}
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
              
              <Accomplish />
              <HurdlesPage />
              <AboutTheRace />
              <ProjectShowcase />
              <Alphabet />
              <SpeakersPage />
              {/* <Alphabet /> Alphabet section added */}
              <Footer /> {/* Footer at the very bottom */}
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
