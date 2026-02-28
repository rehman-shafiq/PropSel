import React from 'react';

const RealtorCTA: React.FC = () => {
  return (
    <section className="position-relative py-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      <div className="container-fluid position-relative px-4">
        <div className="row justify-content-center text-center text-white">
          <div className="col-md-8">
            <h2 className="display-5 fw-bold mb-3">Become a Certified Realtor</h2>
            <p className="lead mb-4">Join the PropSel network today.</p>
            <button className="btn btn-lg rounded-pill px-4 btn-success">Join Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealtorCTA;