"use client";
import MainLayout from '@/app/layout/page';
import React from 'react';

// Mock user data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  orders: [
    {
      id: 1,
      date: "2023-06-01",
      items: [
        { name: "Premium Charcoal", quantity: 2, price: "$20.00" },
        { name: "Smoker Pellets", quantity: 1, price: "$10.00" },
      ],
      total: "$50.00",
    },
    {
      id: 2,
      date: "2023-06-15",
      items: [
        { name: "Lump Charcoal", quantity: 3, price: "$30.00" },
      ],
      total: "$30.00",
    },
  ],
};

const Account = () => {
  return (
   <MainLayout>
     <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Account Details</h1>

      <div className='flex flex-wrap'>
      <div className="mb-8 bg-white p-3 mr-5">
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {'8988999999'}</p>
      </div>

      <div className="mb-8 bg-white p-3 mr-5">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>{user.address.street}</p>
        <p>{user.address.city}, {user.address.state} {user.address.zip}</p>
      </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        {user.orders.map(order => (
          <div key={order.id} className=" bg-white mb-4 p-4 border rounded shadow">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> {order.total}</p>
            <h3 className="font-semibold mt-2">Items:</h3>
            <ul className="list-disc list-inside">
              {order.items.map((item, index) => (
                <li key={index}>{item.name} - {item.quantity} x {item.price}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
   </MainLayout>
  );
};

export default Account;
