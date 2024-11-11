"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MainLayout from '@/app/layout/page';
import products from '../../constants';
import Image from 'next/image'
import CartButton from '@/app/components/product/cartButton/page';
// Define the product type
type Product = {
  id: any;
  name: any;
  price: any;
  image: any;
};



const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>(products);

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const addToCart = (product: Product) => {
    console.log(`Added ${product.name} to cart`);
    // Implement actual add to cart logic here
  };

  return (
   <MainLayout> <div className="container mx-auto p-4">
   <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
   {wishlist.length === 0 ? (
     <div className="text-center py-8">
       <p className="text-xl mb-4">Your wishlist is empty</p>
       <Link href="/shop" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
         Continue Shopping
       </Link>
     </div>
   ) : (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {wishlist.map(product => (
         <div key={product.id} className="bg-white border rounded-lg overflow-hidden shadow-lg">
           <div className="relative">
             <Image src={product.image} alt={product.name} width={0} height={0} className="w-full h-48 object-cover" />
             <button
               onClick={() => removeFromWishlist(product.id)}
               className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition duration-300"
             >
               <FontAwesomeIcon icon={faTimes} className="text-red-500" />
             </button>
           </div>
           <div className="p-4">
             <h2 className="text-base font-semibold mb-2">{product.name}</h2>
             <p className="text-gray-600 mb-4">${product.price}</p>
             <div className="flex justify-between items-center">
              <div className=''>
              <CartButton > Add To Cart</CartButton></div>
               {/* <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl" /> */}
             </div>
           </div>
         </div>
       ))}
     </div>
   )}
 </div></MainLayout>
  );
};

export default WishlistPage;