import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindAnAgent.css';
import FAQ from './FAQ';

// Types define karna zaroori hai
interface Agent {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  salesLast12Months: number;
  totalSales: number;
  imageUrl: string;
  location: string;
  city: string;
  country: string;
  isTeam: boolean;
}

const FindAnAgent: React.FC = () => {

  /* States */
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState<'Location' | 'Name'>('Location');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  /* Hooks */

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const allAgents: Agent[] = [
    { id: 1, name: "Matt Laricy", city: "Chicago", country: "USA", rating: 5.0, reviewCount: 1872, priceRange: "$440k - $1.2M", salesLast12Months: 184, totalSales: 3429, imageUrl: "https://i.pravatar.cc/150?u=1", location: "Chicago, IL", isTeam: true },
    { id: 2, name: "Patrick Shino", city: "Chicago", country: "USA", rating: 4.9, reviewCount: 1214, priceRange: "$230k - $2.7M", salesLast12Months: 114, totalSales: 527, imageUrl: "https://i.pravatar.cc/150?u=2", location: "Chicago, IL", isTeam: true },
    { id: 3, name: "Sam Shaffer", city: "Naperville", country: "USA", rating: 5.0, reviewCount: 764, priceRange: "$415k - $1.6M", salesLast12Months: 111, totalSales: 1612, imageUrl: "https://i.pravatar.cc/150?u=3", location: "Naperville, IL", isTeam: true },
    { id: 7, name: "Zubair Khan", city: "Lahore", country: "Pakistan", rating: 4.8, reviewCount: 95, priceRange: "PKR 20M - 80M", salesLast12Months: 32, totalSales: 210, imageUrl: "https://i.pravatar.cc/150?u=7", location: "DHA Phase 6, Lahore", isTeam: false },
    { id: 8, name: "Ayesha Malik", city: "Islamabad", country: "Pakistan", rating: 4.9, reviewCount: 54, priceRange: "PKR 15M - 120M", salesLast12Months: 18, totalSales: 89, imageUrl: "https://i.pravatar.cc/150?u=8", location: "Emaar Canyon Views, Islamabad", isTeam: false }
  ];

  // Advanced Filter Logic
  const filteredAgents = allAgents.filter(agent => {
    const term = searchTerm.toLowerCase();
    if (searchType === 'Name') {
      return agent.name.toLowerCase().includes(term);
    } else {
      return (
        agent.city.toLowerCase().includes(term) || 
        agent.country.toLowerCase().includes(term) || 
        agent.location.toLowerCase().includes(term)
      );
    }
  });

  return (
    <div className="find-agent-page" style={{ backgroundColor: '#1f2937', minHeight: '100vh' }}>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title pt-5">A great agent makes <br /> all the difference</h1>
          <div className="search-card">
            <p className="search-label">Find a real estate agent</p>
            <div className="search-bar-wrapper shadow-sm">
              <div className="dropdown" ref={dropdownRef}>
                <button className="dropdown-toggle-btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  {searchType}
                </button>
                <ul className={`dropdown-custom-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <li onClick={() => { setSearchType('Location'); setIsDropdownOpen(false); }}>Location</li>
                  <li onClick={() => { setSearchType('Name'); setIsDropdownOpen(false); }}>Name</li>
                </ul>
              </div>
              <div className="search-input-group">
                <i className={`bi ${searchType === 'Location' ? 'bi-geo-alt' : 'bi-person'} input-icon`}></i>
                <input 
                  type="text" 
                  placeholder={searchType === 'Location' ? "City, Country, or Neighborhood..." : "Enter agent name..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-submit-btn"><i className="bi bi-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5 mt-4">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h3 className="fw-bold text-light m-0">
            {searchTerm && searchType === 'Location' ? `Agents in ${searchTerm}` : "Top Rated Real Estate Agents"}
          </h3>
          <span className="text-muted">{filteredAgents.length} Agents Found</span>
        </div>

        <div className="row g-4">
          {filteredAgents.map(agent => (
            <div key={agent.id} className="col-lg-6">
              <div 
                className="card h-100 p-3 agent-card shadow-sm border-0" 
                onClick={() => navigate(`/agent/${agent.id}`, { state: { agent } })}
                style={{ cursor: 'pointer', transition: '0.3s' }}
              >
                <div className="d-flex gap-3">
                  <div className="agent-img-container text-center">
                    <img src={agent.imageUrl} className="agent-img" alt={agent.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                    {agent.isTeam && <div className="team-badge" style={{ fontSize: '10px', background: '#eee', marginTop: '5px' }}>TEAM</div>}
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="agent-name fw-bold mb-0">{agent.name}</h5>
                      <div className="agent-rating fw-bold small">
                        <span style={{ color: '#ff9d00' }}>★</span> {agent.rating} 
                        <span className="text-muted fw-normal ms-1">({agent.reviewCount})</span>
                      </div>
                    </div>
                    <p className="small text-muted mb-1">{agent.location} | {agent.country}</p>
                    
                    <div className="agent-stats border-top pt-2 mt-2">
                      <div className="stat-row d-flex justify-content-between small mb-1">
                        <span className="text-muted">Price range</span><span className="fw-bold">{agent.priceRange}</span>
                      </div>
                      <div className="stat-row d-flex justify-content-between small mb-1">
                        <span className="text-muted">Sales (12m)</span><span className="fw-bold">{agent.salesLast12Months}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredAgents.length === 0 && (
            <div className="col-12 text-center py-5 text-light">
              <h5>No agents found matching your search.</h5>
            </div>
          )}
        </div>
      </div>
      <FAQ/>
    </div>
  );
};

export default FindAnAgent;