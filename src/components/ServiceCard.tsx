import React from 'react';
import type { IService } from './interfaces';
import { Home, Key, TrendingUp } from 'lucide-react';

interface ServiceCardProps {
  service: IService;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Home,
  Key,
  TrendingUp,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Home;

  return (
    <div className="card h-100 border-0 shadow-sm text-center">
      <div className="card-body p-5">
        <div className="mb-4">
          <IconComponent size={64} className="text-primary" />
        </div>
        <h4 className="card-title fw-bold mb-3">{service.title}</h4>
        <p className="card-text text-muted mb-4">{service.description}</p>
        <button className="btn btn-success rounded-pill px-4">{service.link}</button>
      </div>
    </div>
  );
};

export default ServiceCard;