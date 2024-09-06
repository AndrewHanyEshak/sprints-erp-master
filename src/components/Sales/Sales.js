import React, { useContext } from 'react';
import { ERPContext } from '../../context/ERPContext';

const Sales = () => {
    const { state } = useContext(ERPContext);

    return (
        <div className="sales-container p-6 bg-gray-50 min-h-screen">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Sales Management
            </h1>

            {/* Sales List */}
            <div className="sales-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.sales.map((sale) => (
                    <div
                        key={sale.id}
                        className="sales-item p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:bg-blue-50"
                    >
                        <h2 className="text-xl font-semibold text-blue-700 mb-3">{sale.productName}</h2>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Quantity Sold:</span> {sale.quantity}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Total Amount:</span> ${sale.totalAmount.toFixed(2)}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Customer:</span> {sale.customerName}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sales;