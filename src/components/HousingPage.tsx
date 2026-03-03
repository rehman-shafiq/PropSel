import React, { useState, useMemo } from 'react';
import { Row, Col, Form, Button, } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PropertyCard from './Property';
import type { Property } from './types';

// Leaflet Marker Bug Fix
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ iconUrl: markerIcon, shadowUrl: markerShadow, iconSize: [25, 41], iconAnchor: [12, 41] });
L.Marker.prototype.options.icon = DefaultIcon;

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
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }} className='mt-4 '>
      
      {/* Top Filter Bar */}
      <div className=" border-bottom py-4 px-3 shadow-sm sticky-top mt-5" style={{ zIndex: 1000  , backgroundColor: 'rgb(31, 41, 55)' }}>
        <Row className="gx-2 align-items-center mt-3 " >
          <Col md={3}>
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
              <option value="All ">Home Type</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </Form.Select>
          </Col>
          <Col><Button variant="success" className="rounded-pill px-4 fw-bold">Save search</Button></Col>
        </Row>
      </div>

      {/* Main Content Area */}
      <Row className="g-0 flex-grow-1" >
        
        {/* Left Side: Map */}
        <Col md={6} className="d-none d-md-block border-end" >
          <div style={{ height: '100%', width: '100%' }}>
            <MapContainer center={[31.5204, 74.3587]} zoom={12} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {filteredData.map(p => (
                <Marker key={p.id} position={[p.lat, p.lng]}>
                  <Popup>
                    <div style={{ width: '150px' }}>
                      <img src={p.image} className="img-fluid rounded mb-2" alt="" />
                      <h6 className="fw-bold mb-0">{p.displayPrice}</h6>
                      <p className="small text-muted mb-0">{p.project}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </Col>

        {/* Right Side: Scrollable Listings */}
        <Col md={6} style={{ overflowY: 'auto', height: 'calc(100vh - 65px)', backgroundColor: 'rgb(31, 41, 55)'  }} className="p-3 " >
          <div className="d-flex justify-content-between mb-3" >
            <h5 className="fw-bold text-white">Real Estate Listings</h5>
            <span className="text-muted">{filteredData.length} Results</span>
          </div>
          <Row xs={1} lg={2} className="g-3">
            {filteredData.map(p => (
              <Col key={p.id}>
                <PropertyCard data={p} />
              </Col>
            ))}
          </Row>
          {filteredData.length === 0 && <div className="text-center p-5">No properties match your filters.</div>}
        </Col>

      </Row>
    </div>
  );
};

export default HousingPage;