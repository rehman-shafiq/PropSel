import React from 'react';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  return (
    <section className="hero-section position-relative" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh',
      minHeight: '500px'
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <div className="container-fluid position-relative h-100 d-flex align-items-center px-4">
        <div className="row w-100">
          <div className="col-lg-8 col-xl-6">
            <h1 className="display-4 fw-bold text-white mb-4 text-center" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
              Rentals. Homes.<br />Agents. Loans.
            </h1>
            <div style={{ maxWidth: '450px', margin: '0 auto' }}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;