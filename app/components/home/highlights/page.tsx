import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faExchangeAlt, faHeadset, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const serviceItems = [
  {
    icon: faShippingFast,
    title: 'Free Shipping',
    description: 'Orders over $200'
  },
  {
    icon: faExchangeAlt,
    title: 'Returns',
    description: 'Within 30 days'
  },
  {
    icon: faHeadset,
    title: 'Online Support',
    description: '24 hours a day'
  },
  {
    icon: faCreditCard,
    title: 'Flexible Payment',
    description: 'Pay with multiple credit cards'
  }
];

const ServiceItem = ({ icon, title, description }:any) => (
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <FontAwesomeIcon icon={icon} className="w-6 h-6 text-[var(--color-ember)]" />
    </div>
    <div>
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const ServiceHighlights = () => {
    return (
      <section className="container mx-auto bg-[var(--on-primary)] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 flex overflow-x-auto space-x-4 md:space-x-0">
            {serviceItems.map((item, index) => (
              <div key={index} className="min-w-[180px] md:min-w-0">
                <ServiceItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default ServiceHighlights;