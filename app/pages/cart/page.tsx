"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faIdCard, faTimes ,faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import MainLayout from '@/app/layout/page';
import products from '../../constants'
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(products.map(product => ({ ...product, quantity: 1 })));
  const [orderPlaced, setOrderPlaced] = useState(false);

  const updateQuantity = (id:any, newQuantity:any) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const removeItem = (id:any) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getNumericPrice = (price:any) => {
    const match = price.match(/QAR (\d+(\.\d{1,2})?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const total = cartItems.reduce((sum, item) => sum + getNumericPrice(item.price) * item.quantity, 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <MainLayout>
        <div className="bg-white flex items-center justify-center h-screen">
          <div className=" p-8 rounded-lg shadow-lg text-center">
          <FontAwesomeIcon icon={faCheckCircle} size="5x" color="green" />
            <h2 className="mt-2 text-2xl font-semibold mb-1">Order Placed Successfully!</h2>
            <p className="mb-4">Thank you for your purchase. Your order has been placed successfully.</p>
            <Link href='/' className="text-blue-600">
              Go to Home
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <main className="flex flex-col md:flex-row gap-8">
          <section className="md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart.</h2>
            <table className="w-full">
              <thead className='bg-[var(--color-ember)] text-[var(--on-primary)]'>
                <tr className="border-b">
                  <th className="text-left py-2">Product</th>
                  <th className="text-left py-2">Price</th>
                  <th className="text-left py-2">Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className="border-b bg-white">
                    <td className="py-4 flex items-center">
                      <Image src={item.image} alt={item.name} className="w-12 h-12 mr-4" />
                      {item.name}
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <Link href='/pages/shop'>
                ← Continue Shopping
              </Link>
            </div>
          </section>

          <section className="md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Payment Info.</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Payment Method</label>
                <div className="flex items-center mb-2">
                  <input type="radio" id="creditCard" name="paymentMethod" className="mr-2" checked />
                  <label htmlFor="creditCard" className="flex items-center">
                    <FontAwesomeIcon icon={faCashRegister} className="mr-2" /> Cash on Delivery
                  </label>
                </div>
                {/* <div className="flex items-center">
                  <input type="radio" id="paypal" name="paymentMethod" className="mr-2" />
                  <label htmlFor="paypal" className="flex items-center">
                    <FontAwesomeIcon icon={faIdCard} className="mr-2" /> PayPal
                  </label>
                </div> */}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input type="text" className="w-full border p-2" placeholder="John Carter" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Mobile Number</label>
                <input type="number" className="w-full border p-2" placeholder="" />
              </div>
              <div className="flex mb-4">
                <div className="w-full mr-2">
                  <label className="block mb-2">Address</label>
                  <textarea className="w-full border p-2" placeholder="" />
                </div>
               
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button type="button" className="w-full bg-[var(--color-ember)] text-white py-2 mt-4" onClick={handleCheckout}>
                Check Out
              </button>
            </form>
          </section>
        </main>
      </div>
    </MainLayout>
  );
};

export default CartPage;
