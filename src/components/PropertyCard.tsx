import React from 'react';
import type { IProperty } from './interfaces';

interface PropertyCardProps {
  property: IProperty;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <img src={property.img} className="card-img-top" alt="Property" style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title fw-bold text-dark">{property.price}</h5>
        <p className="card-text text-muted small">
          {property.beds} beds • {property.baths} baths • {property.sqft}
        </p>
        <p className="card-text text-muted small">{property.address}</p>
      </div>
    </div>
  );
};

export default PropertyCard;