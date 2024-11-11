"use client";
import React from 'react';
import Image from 'next/image';
import Img from '../../../assets/coal.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../../product/itemCard/page';
import products from '../../../constants';
import TitleMain from '../../common/titleMain/page';

const FeaturedItems = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 bg-white">
         <TitleMain >Our Featured Products</TitleMain>
        <Slider {...settings}>
          {products.map((product) => (
           <div key={product.id} className="">
           <ProductCard product={product} />
         </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedItems;
