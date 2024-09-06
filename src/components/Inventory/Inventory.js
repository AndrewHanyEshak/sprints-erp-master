import React, { useContext } from 'react';
import { ERPContext } from '../../context/ERPContext';

const Inventory = () => {
    const { state } = useContext(ERPContext);

    return (
        <div className="inventory-container p-8 bg-gray-50 min-h-screen">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Inventory Management
            </h1>
            
            {/* Inventory List */}
            <div className="inventory-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.inventory.map((item) => (
                    <div 
                        key={item.id} 
                        className="inventory-item p-6 shadow-lg rounded-lg bg-white border hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                    >
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">{item.name}</h2>
                        <p className="text-gray-600 mb-1">
                            <span className="font-medium">Quantity: </span> 
                            {item.quantity}
                        </p>
                        <p className="text-gray-600 mb-1">
                            <span className="font-medium">Value: </span> 
                            ${item.value}
                        </p>
                        <p className="text-gray-600 mb-1">
                            <span className="font-medium">Supplier: </span> 
                            {item.supplier}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inventory;