import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-top py-5 mt-5">
      <div className="container-fluid px-4">
        {/* Main footer links */}
        <div className="row mb-4">
          <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">Real Estate</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Buy</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Rent</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Sell</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Home Loans</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Agent finder</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">Rentals</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Rental Buildings</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Apartments for rent</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Houses for rent</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">All Rental Listings</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">Mortgage Rates</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Mortgage Overview</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Get Pre-Qualified</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Mortgage Rates</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Refinance Rates</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
            <h6 className="fw-bold mb-3">Browse Homes</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">California</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Texas</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">New York</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Florida</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Propsel</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">About</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Zestimate</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Research</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Help</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Advertise</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Fair Housing Guide</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none small">Privacy Portal</a></li>
            </ul>
          </div>
        </div>

        {/* App Store Badges */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <div className="d-flex gap-3">
              <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" className="img-fluid" />
              <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 text-end">
            <div className="d-flex justify-content-end gap-3">
              <FaFacebook size={24} className="text-muted" />
              <FaInstagram size={24} className="text-muted" />
              <FaTwitter size={24} className="text-muted" />
              <FaYoutube size={24} className="text-muted" />
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-top pt-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-muted small mb-0">
                Propsel, Inc. holds real estate brokerage licenses in all 50 states and D.C.
              </p>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex justify-content-end gap-4">
                <a href="#" className="text-muted text-decoration-none small">Terms of use</a>
                <a href="#" className="text-muted text-decoration-none small">Privacy</a>
                <a href="#" className="text-muted text-decoration-none small">Ad choice</a>
                <span className="text-muted small">© 2024 Propsel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;