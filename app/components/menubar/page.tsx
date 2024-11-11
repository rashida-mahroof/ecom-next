"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart, faUser, faHeart, faSearch, faBars, faTimes
} from '@fortawesome/free-solid-svg-icons';
import products from '../../constants';
import ItemList from '../product/itemList/page';
import Panel from '../common/sidePanel/page';
import Popup from '../account/login/page';

// menus.js
export const menuData = {
  categories: [
    {
      name: "Barbecue Charcoal",
      subcategories: [
        {
          name: "Natural Charcoal",
          items: [
            { name: "Taj", options: ["18 kg", "10 kg", "3 kg", "2.5 kg", "1.5 kg"], description: "100% tamarind wood" },
            { name: "Camel", options: ["8 kg", "5 kg", "18 kg"], description: "Mixed wood" }
          ]
        },
        {
          name: "Briquette Charcoal",
          items: [{ name: "Sawdust Charcoal" }, { name: "Wooddust Charcoal" }]
        }
      ]
    },
    {
      name: "Sheesha Charcoal",
      subcategories: [
        {
          name: "Sheesha Charcoal Natural",
          items: [{ name: "Sheesha Charcoal", weight: "10 kg" }, { name: "Sheesha Box", weight: "700 gm" }]
        },
        {
          name: "Sheesha Briquette",
          types: ["Shell", "Lava"]
        }
      ]
    },
    {
      name: "Bakhor Charcoal",
      brands: ["Three Star", "Max", "Majlis", "Silver Coal", "Blue Charcoal"]
    },
    {
      name: "Firewood",
      types: ["Zainthoon", "Bosnia", "Bonsania"]
    },
    {
      name: "Camping Accessories",
      items: ["Stove", "Butane Gas", "Chair", "Vishari"]
    },
    {
      name: "Barbecue Accessories",
      items: ["Stick", "White Charcoal", "Gel", "Grill"]
    },
    {
      name: "Catering Accessories",
      items: ["Wick Fuel", "Chafing Fuel"]
    },
    {
      name: "Detergent & Liquid",
      items: ["Zainab Abaya", "Marvel Abaya Shampoo", "Softener", "D Magic", "Falcon Max Detergent"]
    },
    {
      name: "Floor Cleaner",
      items: ["Dexin Tile Cleaner", "Flash", "Bleach"]
    },
    {
      name: "Drainage Remover",
      items: ["Dexin Drain Opener", "Marvel Drain Opener"]
    }
  ]
};

const Menubar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownStates, setDropdownStates] = useState<Record<number, boolean>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index:any) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const formatCategoryName = (name:any) =>
    name.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <div className={`bg-white text-gray-800 shadow-md ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="container mx-auto">
          {/* Top bar */}
          <div className="flex justify-between items-center py-3 px-4">
            <Link href='/'>
              <img src="/logo.png" alt="logo" className="h-8" />
            </Link>
            <div className="flex-grow mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for 'chicken'"
                  className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <FontAwesomeIcon icon={faSearch} fontSize={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center text-sm" onClick={() => setIsPopupOpen(!isPopupOpen)}>
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <span>Login & Register</span>
              </button>
              <button onClick={() => setIsWishlistOpen(!isWishlistOpen)}>
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </button>
              <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative">
                <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">5</span>
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}>
              <FontAwesomeIcon icon={isMobileSidebarOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>

          {/* Menu bar */}
          <nav className="hidden md:flex justify-between items-center py-2 px-4">
            {menuData.categories.map((menu, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-xs font-medium hover:text-[var(--color-ember)] flex items-center capitalize"
                >
                  {menu.name}
                </button>
                {menu.subcategories && dropdownStates[index] && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                    {menu.subcategories.map((subcategory, subIndex) => (
                      <Link
                        href={`/pages/shop/${formatCategoryName(subcategory.name)}`}
                        key={subIndex}
                        className="capitalize block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileSidebarOpen(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search for 'chicken'"
            className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {menuData.categories.map((menu, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => toggleDropdown(index)}
                className="text-sm font-medium hover:text-[var(--color-ember)] flex items-center capitalize w-full text-left"
              >
                {menu.name}
              </button>
              {menu.subcategories && dropdownStates[index] && (
                <div className="mt-2 pl-4">
                  {menu.subcategories.map((subcategory, subIndex) => (
                    <Link
                      href={`/pages/shop/${formatCategoryName(subcategory.name)}`}
                      key={subIndex}
                      className="capitalize block py-2 text-sm text-gray-700 hover:text-[var(--color-ember)]"
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Panel isOpen={isCartOpen} togglePanel={() => setIsCartOpen(!isCartOpen)} title="Cart" route="/pages/cart" items={products.map((product) => <ItemList key={product.id} product={product} />)} />
      <Panel isOpen={isWishlistOpen} togglePanel={() => setIsWishlistOpen(!isWishlistOpen)} title="Wishlist" route="/pages/wishlist" items={products.map((product) => <ItemList key={product.id} product={product} />)} />
      <Popup isOpen={isPopupOpen} togglePopup={() => setIsPopupOpen(!isPopupOpen)} />
    </>
  );
};

export default Menubar;
