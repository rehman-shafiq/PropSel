
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FindAnAgent from './components/FindAnAgent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from 'lucide-react';
import AgentDetails from './components/AgentDetails';

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

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};
export default App; 
