"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faEdit, faTrash, faBox, faShoppingCart, faUsers, faSearch, faStar, faCheck, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import CommonTable from '@/app/components/common/table/page';
import categories from '@/app/categories';
// Mock data (replace with actual data fetching in a real application)
const mockProducts = [
    { id: 1, name: 'Product 1', price: 'QAR 100', stock: 50 },
    { id: 2, name: 'Product 2', price: 'QAR 200', stock: 30 },
];

const mockOrders = [
    { id: 1, customer: 'John Doe', total: 'QAR 300', status: 'Shipped' },
    { id: 2, customer: 'Jane Smith', total: 'QAR 450', status: 'Processing' },
];

const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer' },
    { id: 2, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
];

const mockReviews = [
    { id: 1, productId: 1, productName: 'Product 1', user: 'John Doe', rating: 4, comment: 'Great product!', status: 'Approved' },
    { id: 2, productId: 2, productName: 'Product 2', user: 'Jane Smith', rating: 5, comment: 'Excellent quality.', status: 'Pending' },
];

type TabType = 'products' | 'add-product' | 'orders' | 'users' | 'reviews';

const AdminDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('products');
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
        ));
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'products':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Products</h2>
                        <CommonTable
                            columns={[
                                { header: 'Name', accessor: 'name' },
                                { header: 'Price', accessor: 'price' },
                                { header: 'Stock', accessor: 'stock' },
                            ]}
                            data={mockProducts}
                            actions={{ edit: true, delete: true }}
                            onEdit={(id: any) => console.log('Edit product', id)}
                            onDelete={(id: any) => console.log('Delete product', id)}
                        />
                    </div>
                );
            case 'orders':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Orders</h2>
                        <CommonTable
                            columns={[
                                { header: 'Order ID', accessor: 'id' },
                                { header: 'Customer', accessor: 'customer' },
                                { header: 'Total', accessor: 'total' },
                                { header: 'Status', accessor: 'status' },
                            ]}
                            data={mockOrders}
                        />
                    </div>
                );
            case 'users':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Users</h2>
                        <CommonTable
                            columns={[
                                { header: 'Name', accessor: 'name' },
                                { header: 'Email', accessor: 'email' },
                                { header: 'Role', accessor: 'role' },
                            ]}
                            data={mockUsers}
                        />
                    </div>
                );
            case 'reviews':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Product Reviews</h2>
                        <CommonTable
                            columns={[
                                { header: 'Product', accessor: 'productName' },
                                { header: 'User', accessor: 'user' },
                                {
                                    header: 'Rating',
                                    accessor: 'rating',
                                    render: (value: any) => renderStars(value)
                                },
                                { header: 'Comment', accessor: 'comment' },
                                {
                                    header: 'Status',
                                    accessor: 'status',
                                    render: (value: any) => (
                                        <span className={`px-2 py-1 rounded ${value === 'Approved' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                                            {value}
                                        </span>
                                    )
                                },
                            ]}
                            data={mockReviews}
                            actions={{
                                approve: true,
                                reject: true,
                                delete: true
                            }}
                            onApprove={(id: any) => console.log('Approve review', id)}
                            onReject={(id: any) => console.log('Reject review', id)}
                            onDelete={(id: any) => console.log('Delete review', id)}
                        />
                    </div>
                );

            case 'add-product':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="productName" className="block mb-1">Product Name</label>
                                <input type="text" id="productName" className="w-full border rounded p-2" />
                            </div>
                            <div>
                            <label htmlFor="cat" className="block mb-1">Category</label>
                               
                                <select name="Category" id="1" className='p-2'>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            <div>
                                <label htmlFor="productPrice" className="block mb-1">Price</label>
                                <input type="text" id="productPrice" className="w-full border rounded p-2" />
                            </div>
                            <div>
                                <label htmlFor="productStock" className="block mb-1">Stock</label>
                                <input type="number" id="productStock" className="w-full border rounded p-2" />
                            </div>
                            <div>
                                <label htmlFor="productDescription" className="block mb-1">Description</label>
                                <textarea id="productDescription" className="w-full border rounded p-2" rows={4}></textarea>
                            </div>
                            <button type="submit" className="bg-[var(--color-ember)] text-white px-4 py-2 rounded hover:bg-blue-600">
                                Add Product
                            </button>
                        </form>
                    </div>
                );
        }
    };

    return (
        <div className="flex h-screen bg-gray-100 ">
            {/* Sidebar */}
            <div className={`flex flex-col justify-between bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                <nav>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'products' ? 'bg-[var(--color-ember)]' : 'hover:bg-gray-700'}`} onClick={() => {
                        setActiveTab('products');
                        setIsSidebarOpen(false);
                    }}>
                        <FontAwesomeIcon icon={faBox} className="mr-2" />Products
                    </a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'add-product' ? 'bg-[var(--color-ember)]' : 'hover:bg-gray-700'}`} onClick={() => { setActiveTab('add-product'); setIsSidebarOpen(false); }}>
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />Add Product
                    </a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'orders' ? 'bg-[var(--color-ember)]' : 'hover:bg-gray-700'}`} onClick={() => { setActiveTab('orders'); setIsSidebarOpen(false); }}>
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Orders
                    </a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'users' ? 'bg-[var(--color-ember)]' : 'hover:bg-gray-700'}`} onClick={() => { setActiveTab('users'); setIsSidebarOpen(false); }}>
                        <FontAwesomeIcon icon={faUsers} className="mr-2" />Users
                    </a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'reviews' ? 'bg-[var(--color-ember)]' : 'hover:bg-gray-700'}`} onClick={() => { setActiveTab('reviews'); setIsSidebarOpen(false); }}>
                        <FontAwesomeIcon icon={faStar} className="mr-2" />Reviews
                    </a>
                </nav>
                <div className="relative px-4">
                    <button className="flex items-center focus:outline-none" title="User Account">
                        <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
                        <span className="ml-2 text-white">Admin</span>
                    </button>
                    {/* You can add a dropdown menu here in the future */}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top bar */}
                <header className="bg-white shadow-lg p-4">
                    <div className="flex items-center justify-between">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <h1 className="text-xl font-bold">Admin Dashboard</h1>
                        <div className="flex items-center">
                            <div className="relative mr-4">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border rounded-full py-2 px-4 focus:outline-none focus:shadow-outline"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="absolute right-0 top-0 mt-3 mr-4">
                                    <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                                </button>
                            </div>

                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    {renderTabContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;