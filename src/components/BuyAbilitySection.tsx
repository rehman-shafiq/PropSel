import React from 'react';

const BuyAbilitySection: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4" style={{ color: '#006aff' }}>Prosel Home Loans</h3>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Target home price</label>
                  <div className="border rounded p-2 bg-light">
                    <span className="fw-bold">$500,000</span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Monthly payment</label>
                  <div className="border rounded p-2 bg-light">
                    <span className="fw-bold">$2,500</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Down payment</label>
                  <div className="border rounded p-2 bg-light">
                    <span className="fw-bold">$50,000</span>
                  </div>
                </div>
                <button className="btn btn-primary w-100 rounded-pill">Get pre-approved</button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h3 className="fw-bold mb-4">Within BuyAbility™</h3>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <img src="https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="Home" />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-success">Within BuyAbility</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-bold">$450,000</h6>
                    <p className="card-text small text-muted mb-1">3 beds • 2 baths • 1,800 sqft</p>
                    <p className="card-text small text-muted">123 Main St, Downtown</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <img src="https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="Home" />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-success">Within BuyAbility</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-bold">$550,000</h6>
                    <p className="card-text small text-muted mb-1">4 beds • 3 baths • 2,200 sqft</p>
                    <p className="card-text small text-muted">456 Oak Ave, Suburb</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <img src="https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="Home" />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-success">Within BuyAbility</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-bold">$650,000</h6>
                    <p className="card-text small text-muted mb-1">4 beds • 3 baths • 2,400 sqft</p>
                    <p className="card-text small text-muted">789 Pine Rd, Uptown</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyAbilitySection;