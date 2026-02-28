import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AgentDetails.css';

const AgentDetails: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const agent = state?.agent;
  const scrollRef = useRef<HTMLDivElement>(null);

  const sales = [
    { id: 1, price: "$519,000", desc: "2 bd | 2 ba | 1,200 sqft | Chicago, IL", status: "Sold 9 days ago", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=500" },
    { id: 2, price: "$300,000", desc: "2 bd | 2 ba | 1,122 sqft | Addison, IL", status: "Sold 16 days ago", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=500" },
    { id: 3, price: "$392,000", desc: "2 bd | 2 ba | 0 sqft | Chicago, IL", status: "Sold 17 days ago", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500" },
    { id: 4, price: "$415,000", desc: "3 bd | 1 ba | 1,100 sqft | Chicago, IL", status: "Sold 22 days ago", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=500" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (!agent) return <div className="p-5 text-center">Loading...</div>;

  return (
    <div className="details-page-wrapper  py-4 min-vh-100 mt-5" style={{ backgroundColor: 'rgb(31, 41, 55)' }}>
      <div className="container">
        {/* Header Breadcrumbs */}
        <div className="d-flex justify-content-between small text-muted mb-3 px-2  mt-5">
          <span onClick={() => navigate(-1)} style={{ cursor: 'pointer' , color: 'rgb(255, 255, 255)' }}>Illinois - Chicago - {agent.name}</span>
        {/*   <span className="text-primary cursor-pointer">Report a problem</span> */}
        </div>

        {/* Main Card: Profile & Slider */}
        <div className="card shadow-sm border p-4 mb-4 position-relative">
          <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
            <button className="btn btn-light border-circle shadow-sm" onClick={() => scroll('left')}><i className="bi bi-chevron-left"></i></button>
            <button className="btn btn-light border-circle shadow-sm" onClick={() => scroll('right')}><i className="bi bi-chevron-right"></i></button>
          </div>

          <div className="row">
            <div className="col-md-3 text-center border-end">
              <img src={agent.imageUrl} className="rounded-circle mb-3" style={{ width: '130px', height: '130px', objectFit: 'cover' }} alt="" />
              <h2 className="fw-bold mb-1 h3">{agent.name}</h2>
              <p className="text-muted small mb-0">FULTON GRACE REALTY</p>
              <p className="text-muted extra-small mb-2" style={{fontSize: '11px'}}>Lead of The {agent.name.split(' ')[0]} Group</p>
              <div className="fw-bold text-primary">5.0 ★ <span className="text-muted fw-normal ms-1 small">1,229 team reviews</span></div>
            </div>

            <div className="col-md-9 ps-md-4">
              <h6 className="fw-bold text-uppercase" style={{ fontSize: '12px', color: '#d4a017' }}>
                <span className="badge bg-warning text-dark me-2">TEAM</span> Recent Sales
              </h6>
              <p className="text-muted small mb-3">Sales numbers represent all team members</p>
              
              <div ref={scrollRef} className="hide-scrollbar d-flex gap-3 overflow-auto pb-3" style={{ scrollSnapType: 'x mandatory' }}>
                {sales.map(s => (
                  <div key={s.id} className="border rounded bg-white shadow-sm sales-card-hover" style={{ minWidth: '260px', scrollSnapAlign: 'start' }}>
                    <div className="position-relative">
                      <img src={s.img} className="w-100 rounded-top" style={{ height: '140px', objectFit: 'cover' }} alt="" />
                      <span className="position-absolute top-0 start-0 m-2 badge bg-dark opacity-75">Buyer</span>
                    </div>
                    <div className="p-3">
                      <h5 className="fw-bold mb-0">{s.price}</h5>
                      <p className="text-muted extra-small mb-2" style={{fontSize: '11px'}}>{s.desc}</p>
                      <div className="text-warning fw-bold" style={{ fontSize: '11px' }}>● {s.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row text-center border-top pt-3 mt-2 g-0">
                <div className="col-3 border-end"><strong>123</strong><div className="extra-small text-muted">Sales last 12 months</div></div>
                <div className="col-3 border-end"><strong>719</strong><div className="extra-small text-muted">Total sales</div></div>
                <div className="col-3 border-end"><strong>$20K-$2.7M</strong><div className="extra-small text-muted">Price range</div></div>
                <div className="col-3"><strong>$512K</strong><div className="extra-small text-muted">Average price</div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section: About & Form */}
        <div className="row mt-4">
          <div className="col-lg-8">
            <div className="border rounded p-4 mb-4 shadow-sm bg-white">
              <h5 className="fw-bold mb-3">Get to know The {agent.name.split(' ')[0]} Group</h5>
              <p className="fw-bold mb-1 small text-muted">Realtor</p>
              <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Patrick is a Top Producing agent in Chicago. Ranked as a top 100 agent in Chicago, and awarded a Top Producer by The Chicago Association of Realtors...
                <br /><span className="text-primary fw-bold cursor-pointer small">Show less</span>
              </p>
              <div className="mt-3 d-flex align-items-center gap-2">
                <span className="text-muted small">Specialties:</span>
                <span className="badge bg-light text-dark border p-2 fw-normal">Property Management</span>
              </div>
            </div>

            <div className="border rounded p-4 shadow-sm bg-white">
              <h5 className="fw-bold mb-3">Team listings & sales (731)</h5>
              <div className="bg-light rounded overflow-hidden shadow-inner" style={{ height: '400px' }}>
                 <iframe 
                  title="map"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.43271732688!2d-87.8720465!3d41.8337329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1647450000000!5m2!1sen!2sus" 
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="border rounded p-4 sticky-top shadow-sm bg-white" style={{ top: '20px' }}>
              <h5 className="fw-bold mb-4">Contact The {agent.name.split(' ')[0]} Group</h5>
              <form>
                <div className="mb-3"><label className="small fw-bold">Name</label><input type="text" className="form-control form-control-sm bg-light" /></div>
                <div className="mb-3"><label className="small fw-bold">Phone</label><input type="text" className="form-control form-control-sm bg-light" /></div>
                <div className="mb-3"><label className="small fw-bold">Email</label><input type="email" className="form-control form-control-sm bg-light" /></div>
                <div className="mb-3"><label className="small fw-bold">Message (optional)</label><textarea className="form-control form-control-sm bg-light" rows={4}></textarea></div>
                <button type="button" className="btn btn-success w-100 fw-bold py-2 mb-3">Contact the team</button>
                <p style={{fontSize: '10px'}} className="text-muted text-center">By submitting your information, you agree to our Terms of Use.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;