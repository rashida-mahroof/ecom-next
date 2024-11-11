import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFax, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MainLayout from '@/app/layout/page';

const ContactPage = () => {
  return (
    <MainLayout>

        <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Information */}
        <div className="md:w-1/3">
          <ContactInfo
            icon={faPhone}
            title="Phone Number"
            content="+1(321) 234 5678"
          />
          <ContactInfo
            icon={faEnvelope}
            title="Email Address"
            content="example@gmail.com"
          />
          <ContactInfo
            icon={faFax}
            title="Fax Address"
            content="+1(321) 234 5678"
          />
          <ContactInfo
            icon={faLocationDot}
            title="Location"
            content="123 Business Avenue, NYC"
          />
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Send Message</h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nisl, eu bibendum purus eleifend vel.
          </p>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email address"
                className="p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="p-2 border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border rounded mb-4"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 border rounded mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--color-flame)] text-white px-6 py-2 rounded hover:bg-[var(--color-ember)] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

     
    </div>
    </MainLayout>
  );
};

const ContactInfo = ({ icon, title, content }:any) => (
  <div className="flex items-start mb-6">
    <FontAwesomeIcon icon={icon} className="text-[var(--color-ember)] mr-4 mt-1" />
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default ContactPage;