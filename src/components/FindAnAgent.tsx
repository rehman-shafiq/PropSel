import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindAnAgent.css';
import FAQ from './FAQ';

const FindAnAgent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState<'Location' | 'Name'>('Location');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const allAgents = [
    { id: 1, name: "Matt Laricy", rating: 5.0, reviewCount: 1872, priceRange: "$440k - $1.2M", salesLast12Months: 184, totalSales: 3429, imageUrl: "https://i.pravatar.cc/150?u=1", location: "Chicago, IL", isTeam: true },
    { id: 2, name: "Patrick Shino", rating: 4.9, reviewCount: 1214, priceRange: "$230k - $2.7M", salesLast12Months: 114, totalSales: 527, imageUrl: "https://i.pravatar.cc/150?u=2", location: "Chicago, IL", isTeam: true },
    { id: 3, name: "Sam Shaffer", rating: 5.0, reviewCount: 764, priceRange: "$415k - $1.6M", salesLast12Months: 111, totalSales: 1612, imageUrl: "https://i.pravatar.cc/150?u=3", location: "Naperville, IL", isTeam: true },
    { id: 4, name: "Bari Levine Bruso", rating: 5.0, reviewCount: 502, priceRange: "$110k - $1.4M", salesLast12Months: 135, totalSales: 1198, imageUrl: "https://i.pravatar.cc/150?u=4", location: "Evanston, IL", isTeam: true },
    { id: 5, name: "Vesta Preferred Realty", rating: 5.0, reviewCount: 513, priceRange: "$310k - $2.3M", salesLast12Months: 582, totalSales: 2835, imageUrl: "https://i.pravatar.cc/150?u=5", location: "Chicago, IL", isTeam: true },
    { id: 6, name: "Emily Santos", rating: 4.8, reviewCount: 320, priceRange: "$250k - $900k", salesLast12Months: 95, totalSales: 412, imageUrl: "https://i.pravatar.cc/150?u=6", location: "Lincoln Park, IL", isTeam: false }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredAgents = allAgents.filter(agent => {
    const term = searchTerm.toLowerCase();
    return searchType === 'Name' 
      ? agent.name.toLowerCase().includes(term) 
      : agent.location.toLowerCase().includes(term);
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
                  placeholder={searchType === 'Location' ? "City, neighborhood, or ZIP code" : "Enter agent name..."}
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
        <h3 className="fw-bold text-center mb-5 text-light">Real Estate Agents in Chicago, IL</h3>
        <div className="row g-4">
          {filteredAgents.map(agent => (
            <div key={agent.id} className="col-lg-6">
              <div 
                className="card h-100 p-3 agent-card shadow-sm border-0" 
                onClick={() => navigate(`/agent/${agent.id}`, { state: { agent } })}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex gap-3">
                  <div className="agent-img-container text-center">
                    <img src={agent.imageUrl} className="agent-img" alt={agent.name} />
                    {agent.isTeam && <div className="team-badge">TEAM</div>}
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="agent-name fw-bold mb-0" style={{ color: '#000000' }}>{agent.name}</h5>
                      <div className="agent-rating fw-bold">
                        <span style={{ color: '#ff9d00' }}>★</span> {agent.rating} 
                        <span className="text-muted fw-normal ms-1 small">({agent.reviewCount})</span>
                      </div>
                    </div>
                    <p className="small text-muted mb-1">{agent.location}</p>
                    <p className="small mb-3">Agent with Premium Realty</p>
                    <div className="agent-stats border-top pt-2 mt-2">
                      <div className="stat-row d-flex justify-content-between small mb-1">
                        <span className="text-muted">Price range</span><span className="fw-bold">{agent.priceRange}</span>
                      </div>
                      <div className="stat-row d-flex justify-content-between small mb-1">
                        <span className="text-muted">Sales last 12 months</span><span className="fw-bold">{agent.salesLast12Months}</span>
                      </div>
                      <div className="stat-row d-flex justify-content-between small">
                        <span className="text-muted">Total sales</span><span className="fw-bold">{agent.totalSales}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQ/>
    </div>
  );
};
export default FindAnAgent;