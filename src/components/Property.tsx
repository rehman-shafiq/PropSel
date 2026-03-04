import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import Navigate
import type { Property } from './types';

const PropertyCard: React.FC<{ data: Property }> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to details page with data
    navigate(`/property/${data.id}`, { state: { data } });
  };

  return (
    <Card 
      className="border-0 shadow-sm rounded-0 h-100 overflow-hidden property-card-hover"
      onClick={handleClick} 
      style={{ cursor: 'pointer', transition: '0.3s' }}
    >
      <div className="position-relative">
        <Card.Img variant="top" src={data.image} style={{ height: '180px', objectFit: 'cover' }} />
        <Badge bg="white" text="dark" className="position-absolute top-0 start-0 m-2 border shadow-sm">
          {data.project} 
        </Badge>
      </div>
      <Card.Body className="p-2">
        <h4 className="fw-bold mb-0">{data.displayPrice}</h4>
        <div className="small text-muted mb-1">
          <strong>{data.beds}</strong> bds | <strong>{data.baths}</strong> ba | <strong>{data.size}</strong> | Active
        </div>
        <div className="small text-truncate mb-1" style={{color: '#555'}}>{data.location}</div>
        <div className="text-uppercase text-muted" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
          Listing by {data.developer}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;