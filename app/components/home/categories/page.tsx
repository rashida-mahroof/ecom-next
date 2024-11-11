import React from 'react';
import Image from 'next/image';
import ProdImage from '../../../assets/rockwood-charcoal.webp';
import Premium from '../../../assets/Charcoal-2.png';
import Lump from '../../../assets/hardwood-lump-charcoal-jpg.jpg';
import BBQ from '../../../assets/bbq.jpg';
import cleaning from '../../../assets/cleaning.jpg';
import camping from '../../../assets/camping.jpg';
import gardening from '../../../assets/gardening.png';
import air from '../../../assets/air.webp';
import foof from '../../../assets/foof.jpg';
import other from '../../../assets/other.png';
import Link from 'next/link';
import TitleMain from '../../common/titleMain/page';

const categories = [
  { id: 'cleaning-products', name: 'CLEANING PRODUCTS', image: cleaning },
  { id: 'barbecue-charcoal', name: 'BARBECUE CHARCOAL', image: Premium },
  { id: 'box-charcoal', name: 'BOX CHARCOAL', image: Lump },
  { id: 'camping-products', name: 'CAMPING PRODUCTS', image: camping },
  { id: 'gardening-products', name: 'GARDENING PRODUCTS', image: gardening },
  { id: 'air-freshener', name: 'AIR FRESHENER', image: air },
  { id: 'food-products', name: 'FOOD PRODUCTS', image: foof },
  
  { id: 'other-accessories', name: 'OTHER ACCESSORIES', image:  other},
];


const ShopByCategories = () => {
  return (
    <section className=" container  py-10 px-4 max-w-7xl mx-auto">
      <TitleMain>Shop by Categories</TitleMain>
      <div className="  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link href='/pages/shop' key={category.id}>
            <div className="relative aspect-square overflow-hidden rounded-lg group">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white  text-sm text-center md:text-base font-semibold">{category.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategories;
