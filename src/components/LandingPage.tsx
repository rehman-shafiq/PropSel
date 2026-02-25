import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import PropertyCard from './PropertyCard';
import AgentCard from './AgentCard';
import ServiceCard from './ServiceCard';
import RealtorCTA from './RealtorCTA';
import FAQ from './FAQ';
import Footer from './Footer';
import { properties, agents, services } from './data';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="py-5 bg-light">
        <div className="container-fluid px-4">
          <h2 className="fw-bold mb-4">Featured Properties</h2>
          <div className="row">
            {properties.map(property => (
              <div className="col-lg-3 col-md-6 mb-4" key={property.id}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid px-4">
          <h2 className="fw-bold mb-4">Find Top Rated Agents</h2>
          <div className="row">
            {agents.map(agent => (
              <div className="col-lg-3 col-md-6 mb-4" key={agent.id}>
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container-fluid px-4">
          <h2 className="fw-bold mb-4 text-center">Our Services</h2>
          <div className="row">
            {services.map(service => (
              <div className="col-lg-3 col-md-6 mb-4" key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <RealtorCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;