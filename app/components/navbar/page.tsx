import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faHeadphonesAlt, faMobileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function NavBar() {
  return (
    <div style={{ backgroundColor: 'var(--secondary-color)' }} className="text-white p-1 flex flex-wrap items-center lg:justify-between justify-end max-w-full container mx-auto">
      <div className="items-center space-x-4 text-xs hidden lg:flex">
        <div className="flex items-center space-x-2 flex-row">
          <FontAwesomeIcon icon={faAt} className="text-3xl font-light" />
          <div className="flex-col">
            <p>MAIL US</p>
            <Link href="mailto:info@charc.ae" className="hover:underline">info@charc.ae</Link>
          </div>
        </div>
        {/* <div className="flex items-center space-x-2 flex-row">
          <FontAwesomeIcon icon={faHeadphonesAlt} className="text-3xl font-light" />
          <div className="flex-col">
            <p className="uppercase">Toll Free</p>
            <Link href="tel:800724249" className="hover:underline">800 724249</Link>
          </div>
        </div> */}
        <div className="flex items-center space-x-2 flex-row">
          <FontAwesomeIcon icon={faMobileAlt} className="text-3xl font-light" />
          <div className="flex-col">
            <p className="uppercase">Call Support</p>
            <Link href="tel:+971586046586" className="hover:underline">+971 586 046 586</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {/* <button>
          <FontAwesomeIcon icon={faSearch} />
        </button> */}
        <Link href='/pages/shop' className="bg-[var(--color-charcoal)] text-white px-4 py-2 hover:bg-[var(--color-flame)] translate-x-0 transition-all">Shop Now</Link>
        <div className="flex space-x-2">
          <Link href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} className="text-xs sm:text-3xl md:text-xl" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} className="text-xs sm:text-3xl md:text-xl" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} className="text-xs sm:text-3xl md:text-xl" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faYoutube} className="text-xs sm:text-3xl md:text-xl" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faWhatsapp} className="text-xs sm:text-3xl md:text-xl" />
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default NavBar;
