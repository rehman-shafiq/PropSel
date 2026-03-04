import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Form, Carousel } from 'react-bootstrap';
import type { Property } from './types';
import './HousingSocietDetails.css'; // Custom CSS for this page

const HousingSocietyDetails: React.FC = () => {
  /* States */
  const { state } = useLocation();
  const property = state?.data as Property;
/* Hooks */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) return <div className="p-5 text-center text-white">Loading...</div>;

  // Additional Images for Slider
  const galleryImages = [
    property.image, // Main Image
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', // Living Room
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a', // Bedroom
    'https://images.unsplash.com/photo-1556911223-e1520288625b', // Kitchen
  ];

  return (
    <div style={{backgroundColor: 'rgb(31, 41, 55)' , minHeight: '100vh' }} className="pt-5 mt-5">
      
      {/* 1. FULL SCREEN IMAGE SLIDER (Autoplay) */}
      <div className="mb-4 shadow-sm">
        <Carousel 
          fade 
          interval={2000} 
          controls={true} 
          indicators={true}
        >
          {galleryImages.map((img, index) => (
            <Carousel.Item key={index} style={{ height: '70vh' }}>
              <div style={{ 
                height: '100%', 
                width: '100%',
                backgroundImage: `url(${img})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}>
                {/* Image overlay for badge */}
                <div className="p-4">
                  <Badge bg="danger" className="px-3 py-2 fs-6 shadow">FOR SALE</Badge>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container>
        <Row>
          {/* LEFT SIDE: DETAILS */}
          <Col lg={8} className="pe-lg-5">
            
            {/* Header: Price & Stats */}
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h1 className="fw-bold mb-0" style={{ fontSize: '3rem', color: '#ffffff' }}>{property.displayPrice}</h1>
                <div className="d-flex gap-4 fs-4 mt-2 text-light border-top pt-2">
                  <span><strong>{property.beds}</strong> bd</span>
                  <span><strong>{property.baths}</strong> ba</span>
                  <span><strong>{property.size}</strong> sqft</span>
                </div>
                <p className=" mt-2 fs-5 text-light"><i className="bi bi-geo-alt-fill me-2 text-primary"></i>{property.location}</p>
              </div>
              <div className="d-flex gap-2">
                <Button variant="success border-0" className="rounded-pill px-4 fw-bold">Save</Button>
                <Button variant="success border-0" className="rounded-pill px-4 fw-bold">Share</Button>
              </div>
            </div>

            <hr />

            {/* Detailed Info Sections (Zillow Style) */}
            <div className="my-5">
              <h4 className="fw-bold mb-4   ps-3 text-light">Interior Details</h4>
              <Row className="gy-4 bg-light p-4 rounded shadow-sm">
                <Col md={6}>
                  <h6 className="fw-bold text-dark small mb-3 text-uppercase">Bedrooms & Bathrooms</h6>
                  <ul className="list-unstyled">
                    <li className="mb-3">🛏️ <strong>Bedrooms:</strong> {property.beds} Luxury Rooms</li>
                    <li className="mb-3">🚿 <strong>Bathrooms:</strong> {property.baths} Modern Baths</li>
                    <li className="mb-3">🛋️ <strong>Living Room:</strong> Open floor plan with fireplace</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6 className="fw-bold text-dark small mb-3 text-uppercase">Kitchen & Dining</h6>
                  <ul className="list-unstyled">
                    <li className="mb-3">🍳 <strong>Kitchen:</strong> Chef-grade appliances</li>
                    <li className="mb-3">🍽️ <strong>Dining:</strong> Separate formal dining area</li>
                    <li className="mb-3">🧊 <strong>Utilities:</strong> Central AC & Heating</li>
                  </ul>
                </Col>
              </Row>
            </div>

            <hr />

            {/* Overview / Description */}
            <section className="my-5">
              <h4 className="fw-bold mb-3 text-light">Home Overview</h4>
              <p className="text-secondary fs-5" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                Exclusive project by <strong>{property.developer}</strong>. This "{property.project}" 
                residence offers world-class amenities and a prime location in {property.location}. 
                The interior features premium hardwood floors, high ceilings, and floor-to-ceiling 
                windows that provide stunning views and natural light.
              </p>
            </section>

            <hr />

            {/* Property Construction Facts */}
            <section className="my-5">
              <h4 className="fw-bold mb-4 text-light">Construction Facts</h4>
              <Row className="g-3">
                <Col sm={6} lg={4}>
                  <div className="p-3 border text-center rounded">
                    <div className=" small text-light">Type</div>
                    <div className="fw-bold text-light">{property.type}</div>
                  </div>
                </Col>
                <Col sm={6} lg={4}>
                  <div className="p-3 border text-center rounded">
                    <div className="text-light small">Parking</div>
                    <div className="fw-bold text-light">2 Spaces</div>
                  </div>
                </Col>
                <Col sm={6} lg={4}>
                  <div className="p-3 border text-center rounded">
                    <div className="text-light small">Year Built</div>
                    <div className="fw-bold text-light">2026</div>
                  </div>
                </Col>
              </Row>
            </section>
          </Col>

          {/* RIGHT SIDE: STICKY CONTACT FORM */}
          <Col lg={4}>
            <div className="p-4 border rounded shadow sticky-top bg-white" style={{ top: '100px', zIndex: 10 }}>
              <div className="text-center mb-4">
                <h5 className="fw-bold">Request More Info</h5>
                <p className="small text-muted">Get a response within 24 hours</p>
              </div>

              <div className="d-flex align-items-center mb-4 p-3 bg-light rounded">
                <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center fw-bold" style={{width:'45px', height:'45px'}}>
                  {property.developer.charAt(0)}
                </div>
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">{property.developer}</h6>
                  <p className="small text-muted mb-0">Official Listing Agent</p>
                </div>
              </div>

              <Form>
                <Form.Control type="text" placeholder="Your Name" className="mb-3 py-2" />
                <Form.Control type="tel" placeholder="Phone Number" className="mb-3 py-2" />
                <Form.Control as="textarea" rows={3} className="mb-4" defaultValue={`Hi, I'm interested in the ${property.type} at ${property.location}.`} />
                
                <Button variant="success border-0" className="w-100 py-3 fw-bold rounded shadow-sm mb-2">
                  Contact Developer
                </Button>
                <Button variant="outline-dark" className="w-100 py-3 fw-bold rounded shadow-sm">
                  Schedule Tour
                </Button>
              </Form>
              <div className="mt-3 text-center">
                <small className="text-muted">By clicking, you agree to our terms.</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default HousingSocietyDetails;