"use client"
import React, { useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface PopupProps {
  isOpen: never | boolean;
  togglePopup: () => void ;
}

const Popup: React.FC<PopupProps> = ({ isOpen, togglePopup }) => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50" onClick={togglePopup}></div>
      <div className="bg-white md:w-1/3 sm:w-full max-w-sm p-8 rounded-lg shadow-lg z-10">
        <div className='flex flex-row justify-between items-center'>
          <h2 className="text-xl font-bold mb-4">{isRegister ? 'Register' : 'Login'}</h2>
          <button onClick={togglePopup}><FontAwesomeIcon icon={faClose} /></button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          {isRegister && (
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          {isRegister && (
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded-lg" />
            </div>
          )}
          <div className="flex items-center justify-between">
            <Link href='/pages/dashboard' type="submit" className="bg-[var(--color-ember)] text-white px-4 py-2 rounded-lg">
              {isRegister ? 'Register' : 'Login'}
            </Link>
            <button type="button" className="text-gray-700" onClick={togglePopup}>
              Cancel
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span>{isRegister ? 'Already have an account?' : "Don't have an account?"}</span>
          <button onClick={toggleForm} className="text-[var(--color-ember)] ml-1">
            {isRegister ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
