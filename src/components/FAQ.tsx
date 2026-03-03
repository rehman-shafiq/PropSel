import React from 'react';
import { faqs } from './data';
import './FAQ.css';

const FAQ: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'rgb(31, 41, 55)' }}>
  <div className="container-fluid px-4">
    <h2 className="text-center mb-4 text-light">Frequently Asked Questions</h2>
    <div className="accordion w-75 mx-auto" id="faqAccordion">
      {faqs.map((faq, index) => (
        <div className="accordion-item p-2 mb-2 bg-transparent border-secondary" key={faq.id}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button 
              className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target={`#collapse${index}`} 
              aria-expanded={index === 0 ? "true" : "false"} 
              aria-controls={`collapse${index}`}
              style={{ backgroundColor: 'transparent', color: 'white' }}
            >
              {faq.question}
            </button>
          </h2>
          <div 
            id={`collapse${index}`} 
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
            aria-labelledby={`heading${index}`} 
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-light opacity-75">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default FAQ;