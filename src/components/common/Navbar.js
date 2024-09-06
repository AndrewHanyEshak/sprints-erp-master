import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow-md border-b border-gray-700">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand or Logo */}
                <div className="text-white text-2xl font-bold relative flex items-center group">
                    <Link to="/" className="relative flex items-center group no-underline">
                        <span className="transition-colors duration-300 group-hover:text-teal-400">
                            Sprints ERP
                        </span>
                        <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-md"></span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6 text-white">
                    <li>
                        <Link
                            to="/"
                            className="relative group px-3 py-2 rounded-md transition duration-300 ease-in-out no-underline"
                        >
                            Home
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/inventory"
                            className="relative group px-3 py-2 rounded-md transition duration-300 ease-in-out no-underline"
                        >
                            Inventory
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/finance"
                            className="relative group px-3 py-2 rounded-md transition duration-300 ease-in-out no-underline"
                        >
                            Finance
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sales"
                            className="relative group px-3 py-2 rounded-md transition duration-300 ease-in-out no-underline"
                        >
                            Sales
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="relative group px-3 py-2 rounded-md transition duration-300 ease-in-out no-underline"
                        >
                            Login
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;