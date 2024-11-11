"use client";
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CartButton from '../../product/cartButton/page';
import WishListButton from '../../product/wishlistButton/page';
import Link from 'next/link';

function ProductCard ({ product }: any) {
  if(!product) return null;
  return (
    (
      
      <Link href={`/pages/shop/${product.cat}/${product.id}`} passHref> 
       <div className="flex flex-col items-center bg-white m-1">
        <div className="relative w-full aspect-square mb-4 group overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name} 
            layout="fill" 
            objectFit="cover"
            className="rounded-lg group-hover:scale-110 transition-transform duration-300"
          />
          {product.id === 3 && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>
        <h3 className="text-sm font-semibold ">{product.name}</h3>
        <p className="text-gray-600 ">{product.desc}</p>
        <p className=" font-bold text-base">{product.price}</p>
        <div className="flex">
          {[...Array(product.rating)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 w-4 h-4" />
          ))}
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-2">
            <CartButton>Add To Cart</CartButton>
            <WishListButton>Wish List</WishListButton>
        </div>
      </div>
      </Link>
  ));
}

  export default ProductCard;