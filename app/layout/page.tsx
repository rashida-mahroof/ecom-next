"use client"
import React from 'react';
import NavBar from '../components/navbar/page';
import Menubar from '../components/menubar/page';
import Footer from '../components/footer/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MainLayout({ children }: any) {
  const currentPath = usePathname();

  return (
    <main className='h-screen'>
      <NavBar />
      <Menubar />
      {children}
      <Footer />
      <div className='md:hidden fixed bottom-0 left-0 h-12 bg-[var(--color-ember)] z-50 flex items-center justify-around w-full'>
        <Link href='/pages/wishlist' passHref>
          <div className={`flex flex-col items-center ${currentPath === '/pages/wishlist' ? 'text-[var(--color-ash)]' : 'text-white'}`}>
            <FontAwesomeIcon icon={faHeart} />
            <span className="text-xs">Wishlist</span>
          </div>
        </Link>
        <Link href='/' passHref>
          <div className={`flex flex-col items-center ${currentPath === '/' ? 'text-[var(--color-ash)]' : 'text-white'}`}>
            <FontAwesomeIcon icon={faHome} />
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <Link href='/pages/account' passHref>
          <div className={`flex flex-col items-center ${currentPath === '/pages/account' ? 'text-[var(--color-ash)]' : 'text-white'}`}>
            <FontAwesomeIcon icon={faUser} />
            <span className="text-xs">Account</span>
          </div>
        </Link>
        <Link href='/pages/cart' passHref>
          <div className={`flex flex-col items-center ${currentPath === '/pages/cart' ? 'text-[var(--color-ash)]' : 'text-white'}`}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="text-xs">Cart</span>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default MainLayout;
