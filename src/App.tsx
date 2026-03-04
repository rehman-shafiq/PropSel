
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FindAnAgent from './components/FindAnAgent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from 'lucide-react';
import AgentDetails from './components/AgentDetails';
import HousingPage from './components/HousingPage';
import HighRisePage from './components/HighRise';

import HousingSocietyDetails from './components/HosuingSocietyDetails';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/find-agent" element={<FindAnAgent />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<FindAnAgent />} />
              <Route path="/agent/:id" element={<AgentDetails />} />
              <Route path="/" element={<div>Home Page (Hero Section)</div>} />
              <Route path="/housing-society" element={<HousingPage />} />
              <Route path="/high-rise" element={<HighRisePage />} />
              
                <Route path="/" element={<HousingPage />} />

                <Route path="/property/:id" element={<HousingSocietyDetails />} />
              </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};
export default App; 
