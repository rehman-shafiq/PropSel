import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form, } from 'react-bootstrap';
import PropertyCard from './Property';
import type { Property } from './types';

const HighRisePage: React.FC = () => {
  /* States */
  const [searchLoc, setSearchLoc] = useState('');
  const [devFilter, setDevFilter] = useState('All Developers');

  /* Projects Data */
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

  /* Hooks */
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchLoc = p.location.toLowerCase().includes(searchLoc.toLowerCase());
      const matchDev = devFilter === 'All Developers' || p.developer === devFilter;
      return matchLoc && matchDev;
    });
  }, [searchLoc, devFilter, projects]);

  const groupedData = useMemo(() => {
    const groups: { [key: string]: Property[] } = {};
    filteredProjects.forEach(proj => {
      if (!groups[proj.developer]) {
        groups[proj.developer] = [];
      }
      groups[proj.developer].push(proj);
    });
    return groups;
  }, [filteredProjects]);

  return (
    <div className="bg-light min-vh-100">
      {/* Header Section */}
      <div className="text-white py-5 mb-5" style={{ backgroundColor: 'rgb(31, 41, 55)' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center mt-5 pt-5">High Rise Projects</h2>
          <div className="bg-white p-3 rounded shadow mx-auto" style={{ maxWidth: '800px' }}>
            <Row className="g-2">
              <Col md={7}>
                <Form.Control
                  placeholder="Search by Location..."
                  value={searchLoc}
                  onChange={(e) => setSearchLoc(e.target.value)}
                />
              </Col>
              <Col md={5}>
                <Form.Select
                  value={devFilter}
                  onChange={(e) => setDevFilter(e.target.value)}
                >
                  <option value="All Developers">All Developers</option>
                  <option value="Emaar Pakistan">Emaar Pakistan</option>
                  <option value="Lucky One Group">Lucky One Group</option>
                  <option value="Imarat Group">Imarat Group</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container>
        {Object.keys(groupedData).length > 0 ? (
          Object.entries(groupedData).map(([developer, devProjects]) => (
            <div key={developer} className="mb-5">

              {/* Dynamic Developer Heading */}
              <div className="d-flex align-items-center mb-4">
                <div className="bg-success me-2" style={{ width: '6px', height: '30px', borderRadius: '2px' }}></div>
                <h4 className="fw-bold m-0">Developed by {developer}</h4>
                <div className="ms-auto text-muted small fw-bold">
                  {devProjects.length} {devProjects.length > 1 ? 'Projects' : 'Project'} Found
                </div>
              </div>

              {/* Grid for this Developer's Cards */}
              <Row xs={1} md={2} lg={3} className="g-4">
                {devProjects.map((proj) => (
                  <Col key={proj.id}>
                    <PropertyCard data={proj} />
                  </Col>
                ))}
              </Row>

              {/* Divider between developers */}
              <hr className="mt-5 opacity-25" />
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h5 className="text-muted">No results found for your search.</h5>
          </div>
        )}
      </Container>
    </div>
  );
};

export default HighRisePage;