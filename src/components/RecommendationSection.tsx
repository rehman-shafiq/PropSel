import React from 'react';

const RecommendationSection: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Get home recommendations</h2>
            <p className="lead text-muted mb-4">
              Sign in to Propsel to see homes you might like based on your search history and saved homes.
            </p>
            <button className="btn btn-primary btn-lg rounded-pill px-5 py-3">Sign in</button>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="position-relative">
              {/* Stacked card visual */}
              <div className="card shadow-lg mb-3" style={{ transform: 'rotate(-2deg)', zIndex: 3 }}>
                <img src="https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="Home" />
                <div className="card-body">
                  <h6 className="card-title">$450,000</h6>
                  <p className="card-text small text-muted">3 beds • 2 baths • 1,800 sqft</p>
                </div>
              </div>
              <div className="card shadow-lg mb-3 position-absolute top-50 start-50 translate-middle" style={{ transform: 'rotate(1deg) translate(-50%, -50%)', zIndex: 2 }}>
                <img src="https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="Home" />
                <div className="card-body">
                  <h6 className="card-title">$550,000</h6>
                  <p className="card-text small text-muted">4 beds • 3 baths • 2,200 sqft</p>
                </div>
              </div>
              <div className="card shadow-lg position-absolute top-50 start-50 translate-middle" style={{ transform: 'rotate(3deg) translate(-50%, -50%)', zIndex: 1 }}>
                <img src="https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="Home" />
                <div className="card-body">
                  <h6 className="card-title">$650,000</h6>
                  <p className="card-text small text-muted">4 beds • 3 baths • 2,400 sqft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;