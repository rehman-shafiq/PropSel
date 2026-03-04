import React, { useState, useMemo } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import PropertyCard from './Property';
import type { Property } from './types';

const HousingPage: React.FC = () => {
  // 1. Data Source
  const allProperties: Property[] = [
    {
      id: 1, category: 'housing', price: 695000, displayPrice: '$695,000',
      location: '6220 Spring Mill Rd, Indianapolis', developer: 'F.C. Tucker',
      project: 'Showcase', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      type: 'House', beds: 4, baths: 4, size: '7,036 sqft', lat: 31.5204, lng: 74.3587
    },
    {
      id: 2, category: 'housing', price: 269900, displayPrice: '$269,900',
      location: '16975 Clovis St, South Bend', developer: 'Mckinnies Realty',
      project: 'On Market', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      type: 'House', beds: 4, baths: 2, size: '2,060 sqft', lat: 31.5100, lng: 74.3480
    },
    {
      id: 3, category: 'housing', price: 695000, displayPrice: '$695,000',
      location: 'Rawalpindi Pakistan', developer: 'DHA Group',
      project: 'Showcase', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      type: 'Flat', beds: 4, baths: 4, size: '7,036 sqft', lat: 31.5204, lng: 74.3587
    },
    {
      id: 4, category: 'housing', price: 269900, displayPrice: '$569,900',
      location: 'Defence Road, Lahore', developer: 'Defence Housing Society',
      project: 'On Market', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      type: 'House', beds: 4, baths: 2, size: '2,060 sqft', lat: 31.5100, lng: 74.3480
    },
    {
      id: 5, category: 'housing', price: 269900, displayPrice: '$569,900',
      location: 'Defence Road, Lahore', developer: 'Defence Housing Society',
      project: 'On Market', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      type: 'House', beds: 4, baths: 2, size: '2,060 sqft', lat: 31.5100, lng: 74.3480
    },
       {
      id: 6, category: 'housing', price: 695000, displayPrice: '$695,000',
      location: 'Rawalpindi Pakistan', developer: 'DHA Group',
      project: 'Showcase', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      type: 'Flat', beds: 4, baths: 4, size: '7,036 sqft', lat: 31.5204, lng: 74.3587
    },
    {
      id: 7, category: 'housing', price: 269900, displayPrice: '$569,900',
      location: 'Defence Road, Lahore', developer: 'Defence Housing Society',
      project: 'On Market', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      type: 'House', beds: 4, baths: 2, size: '2,060 sqft', lat: 31.5100, lng: 74.3480
    },
    
  ];

  /* Hooks */
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [hType, setHType] = useState('All');

  const filteredData = useMemo(() => {
    return allProperties.filter(p => {
      const matchSearch = p.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchPrice = p.price <= maxPrice;
      const matchType = hType === 'All' || p.type === hType;
      return matchSearch && matchPrice && matchType;
    });
  }, [searchTerm, maxPrice, hType]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'rgb(31, 41, 55)' }} className='mt-4'>
      
      {/* Top Filter Bar */}
      <div className="border-bottom py-4 px-3 shadow-sm sticky-top mt-5" style={{ zIndex: 1000, backgroundColor: 'rgb(31, 41, 55)' }}>
        <Container fluid="lg">
            <Row className="gx-2 gy-3 align-items-center mt-3">
            <Col md={4} lg={3}>
                <Form.Control 
                placeholder="Address, city, ZIP..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Col>
            
            <Col xs="auto">
                <Form.Select onChange={(e) => setMaxPrice(Number(e.target.value))}>
                <option value="1000000">Any Price</option>
                <option value="300000">$300,000+</option>
                <option value="700000">$700,000+</option>
                </Form.Select>
            </Col>
            <Col xs="auto">
                <Form.Select onChange={(e) => setHType(e.target.value)}>
                <option value="All">Home Type</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
                </Form.Select>
            </Col>
            <Col><Button variant="success" className="rounded-pill px-4 fw-bold">Save search</Button></Col>
            </Row>
        </Container>
      </div>

      {/* Main Content Area - Full Width Grid */}
      <Container fluid="lg" className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-white mb-0">Real Estate Listings</h3>
          <span className="badge bg-secondary">{filteredData.length} Results</span>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop, 4 on large screens */}
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {filteredData.map(p => (
            <Col key={p.id}>
              <PropertyCard data={p} />
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {filteredData.length === 0 && (
            <div className="text-center p-5 text-light mt-5">
                <i className="bi bi-house-exclamation" style={{fontSize: '3rem'}}></i>
                <h4 className="mt-3">No properties match your filters.</h4>
                <p className="text-muted">Try adjusting your price range or search term.</p>
            </div>
        )}
      </Container>
    </div>
  );
};

export default HousingPage;