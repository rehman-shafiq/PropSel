import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import PropertyCard from './PropertyCard';
import AgentCard from './AgentCard';
import ServiceCard from './ServiceCard';
import RealtorCTA from './RealtorCTA';
import FAQ from './FAQ';

import { properties, agents, services } from './data';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Hero />
      <section className="py-5 " style={{ backgroundColor: 'rgb(31, 41, 55)' }}>
        <div className="container-fluid px-4 ">
          <h2 className="fw-bold mb-4 text-light text-center">Featured Properties</h2>
          <div className="row p-5 justify-content-center">
            {properties.map(property => (
              <div className="col-lg-3 col-md-6 mb-4 m-3 " key={property.id}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" " style={{ backgroundColor: 'rgb(31, 41, 55)' }}>
        <div className="container-fluid ">
          <h2 className="fw-bold mb-4 text-light text-center ">Find Top Rated Agents</h2>
          <div className="row  p-5 justify-content-center">
            {agents.map(agent => (
              <div className="col-lg-3 col-md-6  m-3 " key={agent.id}>
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5" style={{ backgroundColor: 'rgb(31, 41, 55)' }}>
        <div className="container-fluid px-4">
          <h2 className="fw-bold mb-4 text-center text-light">Our Services</h2>
          <div className="row justify-content-center">
            {services.map(service => (
              <div className="col-lg-3 col-md-6 mb-4 " key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <RealtorCTA />
      <FAQ />
      </div>
    </div>
  );
};

export default LandingPage;