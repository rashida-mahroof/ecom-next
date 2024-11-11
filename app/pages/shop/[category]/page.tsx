"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faThList, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import products from '../../../constants';
import ProductCard from '@/app/components/product/itemCard/page';
import MainLayout from '@/app/layout/page';
import CatFilter from '@/app/components/shop/categoryFilter/page';
import ItemList from '@/app/components/product/itemList/page';
import Categories from '../../../categories';
import { useParams } from 'next/navigation';
const categories = {
  name: 'Category',
  items: Categories,
};
const parseCategoryName = (name:String) => name.replace(/-/g, ' ');

const Shop = () => {
  const { category } = useParams(); 
  const [view, setView] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const categoryName = parseCategoryName(category.toString());
  return (
    <MainLayout>
      <div className="container mx-auto py-6 px-4">
      
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="flex flex-row items-center w-full space-x-2">
          <div className="md:hidden w-3/4 ">
              <button
                onClick={toggleDropdown}
                className=" relative bg-white  px-4 py-2 border rounded-lg flex items-center justify-between"
              >
                Categories
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 z-10 absolute">
                  <CatFilter category={categories} />
                </div>
              )}
            </div>
            <button onClick={() => setView(true)} className="p-2 border rounded-md">
              <FontAwesomeIcon icon={faTh} />
            </button>
            <button onClick={() => setView(false)} className="p-2 border rounded-md">
              <FontAwesomeIcon icon={faThList} />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <aside className="w-full md:w-1/4 pr-4 mb-4 md:mb-0 sticky h-min top-3.5 flex-1">
            
            <div className="hidden md:block">
              <CatFilter category={categories} />
            </div>
          </aside>
          <main className="w-full md:w-3/4">
          <h6 className="text-xl font-bold mb-2">SHOP {categoryName} </h6>
            <div className={`grid gap-4 ${view ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {products
            // .filter(product => product.cat.toLowerCase() === categoryName.toLowerCase())
            .map(product => (
              view ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <div key={product.id} className="bg-white p-2">
                  <ItemList key={product.id} product={product} />
                </div>
              )
            ))}
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
