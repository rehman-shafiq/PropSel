import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropertyCard from './Property';
import type { Property } from './types';

const HighRisePage: React.FC = () => {

  /* States */
  const [searchLoc, setSearchLoc] = useState('');
  const [devFilter, setDevFilter] = useState('All Developers');
  const [projFilter, setProjFilter] = useState('All Projects');

  /* Hooks */
  const [projects] = useState<Property[]>([
    {
      id: 101, category: 'high-rise', price: 8500000, displayPrice: 'Starting from PKR 85 Lac',
      location: 'Gulberg III, Lahore', developer: 'Lucky One Group', project: 'Lucky Heights',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00', type: 'Flat',
      beds: 2, baths: 2, size: '1200 sqft', lat: 31.5111, lng: 74.3450
    },
    {
      id: 102, category: 'high-rise', price: 95000000, displayPrice: 'Starting from PKR 9.5 Crore',
      location: 'DHA Phase 8, Karachi', developer: 'Emaar Pakistan', project: 'Panorama Riverview',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a', type: 'Flat',
      beds: 3, baths: 4, size: '2800 sqft', lat: 24.8000, lng: 67.0600
    },
    {
      id: 103, category: 'high-rise', price: 12000000, displayPrice: 'Starting from PKR 1.2 Crore',
      location: 'DHA Phase 2, Islamabad', developer: 'Imarat Group', project: 'Amazon Outlet Mall',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716', type: 'Flat',
      beds: 1, baths: 1, size: '600 sqft', lat: 33.5186, lng: 73.1519
    }
  ]);


  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchLoc = p.location.toLowerCase().includes(searchLoc.toLowerCase());
      const matchDev = devFilter === 'All Developers' || p.developer === devFilter;
      const matchProj = projFilter === 'All Projects' || p.project === projFilter;
      return matchLoc && matchDev && matchProj;
    });
  }, [searchLoc, devFilter, projFilter, projects]);

  return (
    <div className="bg-light min-vh-100">
      {/* Search Header Style */}
      <div className="text-white py-5 mb-4" style={{ backgroundColor: 'rgb(31, 41, 55)' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center mt-5">New High Rise Projects</h2>
          <div className="bg-white p-3 rounded shadow">
            <Row className="g-2">
              <Col md={4}>
                <Form.Control
                  placeholder="Search by Location..."
                  className="py-2"
                  value={searchLoc}
                  onChange={(e) => setSearchLoc(e.target.value)}
                />
              </Col>
              <Col md={3}>
                <Form.Select className="py-2" onChange={(e) => setDevFilter(e.target.value)}>
                  <option>All Developers</option>
                  <option>Emaar Pakistan</option>
                  <option>Lucky One Group</option>
                  <option>Imarat Group</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Form.Select className="py-2" onChange={(e) => setProjFilter(e.target.value)}>
                  <option>All Projects</option>
                  {projects.map(p => <option key={p.id}>{p.project}</option>)}
                </Form.Select>
              </Col>
              <Col md={2}>
                <Button variant="success" className="w-100 py-2 fw-bold">Find Projects</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container>
        <div className="d-flex align-items-center mb-4">
          <div className="bg-success me-2" style={{ width: '5px', height: '30px' }}></div>
          <h4 className="fw-bold m-0">Featured High Rise Developments</h4>
          <small className="ms-auto text-muted fw-bold">{filteredProjects.length} Projects Found</small>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4 pb-5">
          {filteredProjects.map((proj) => (
            <Col key={proj.id}>
              <PropertyCard data={proj} />
            </Col>
          ))}
          {filteredProjects.length === 0 && (
            <Col xs={12} className="text-center py-5">
              <h5 className="text-muted">No Projects Found</h5>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HighRisePage;