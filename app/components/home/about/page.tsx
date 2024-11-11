import React from 'react';
import Image from 'next/image';
import { FaHeart, FaStar, FaCheckCircle } from 'react-icons/fa'; // Importing Font Awesome icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../../assets/Charcoal-2.png';
import ShopBtn from '../../common/shopBtn/page';

function About() {
  return (
    <div className="container mx-auto py-6 flex flex-col lg:flex-row items-start">
      {/* Left side: Image */}
      <div className="w-full lg:w-1/2 p-4">
        <Image src={image} alt="About Image" width={600} height={400} className="rounded-lg" />
      </div>
      {/* Right side: Content */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-800 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat risus et nisl
          elementum, nec consequat ipsum suscipit. Nulla facilisi. Mauris eget urna sed dolor
          facilisis dapibus vel vel magna.
        </p>
        <p className="text-gray-800 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat risus et nisl
          elementum, nec consequat ipsum suscipit. Nulla facilisi. Mauris eget urna sed dolor
          facilisis dapibus vel vel magna.
        </p>
        <p className="text-gray-800 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat risus et nisl
          elementum, nec consequat ipsum suscipit. Nulla facilisi. Mauris eget urna sed dolor
          facilisis dapibus vel vel magna.
        </p>
        <p className="text-gray-800 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat risus et nisl
          elementum, nec consequat ipsum suscipit. Nulla facilisi. Mauris eget urna sed dolor
          facilisis dapibus vel vel magna.
        </p>
        <p className="text-gray-800 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat risus et nisl
          elementum, nec consequat ipsum suscipit. Nulla facilisi. Mauris eget urna sed dolor
          facilisis dapibus vel vel magna.
        </p>
        <div className="flex flex-col space-y-4 mb-2">
          {/* Feature 1 */}
          <div className="flex items-center">
            <FaHeart className="text-red-500 w-6 h-6 mr-2" />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center">
            <FaStar className="text-yellow-500 w-6 h-6 mr-2" />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
        </div>
        <ShopBtn/>
      </div>
    </div>
  );
}

export default About;
