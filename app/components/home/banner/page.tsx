"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import ProdImage from '../../../assets/banner.jpg';
import img1 from '../../../assets/shop1.avif';
import img2 from '../../../assets/shop.jpg';

// Dynamic import of Slick Slider
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const Banner = () => {
  const images = [ProdImage, img1, img2];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nav:true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="container mx-auto m-4 bg-white md:h-[70vh] h-auto mb-7">
      <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className=" rounded-lg group h-auto md:h-[70vh]">
              <Image src={image} alt={`Slide ${index}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </Slider>
      
    </div>
  );
};

export default Banner;
