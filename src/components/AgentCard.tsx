import React from 'react';
import type { IAgent } from './interfaces';
import { Star } from 'lucide-react';

interface AgentCardProps {
  agent: IAgent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="card h-100 text-center border-0 shadow-sm">
      <img src={agent.img} className="card-img-top rounded-circle mx-auto mt-3" alt="Agent" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
      <div className="card-body">
        <h6 className="card-title fw-bold">{agent.name}</h6>
        <div className="d-flex justify-content-center mb-3">
          {[...Array(agent.rating)].map((_, i) => (
            <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
          ))}
        </div>
        <button className="btn btn-outline-primary btn-sm">Contact Agent</button>
      </div>
    </div>
  );
};

export default AgentCard;