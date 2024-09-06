import React, { useContext } from 'react';
import { ERPContext } from '../../context/ERPContext';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const { state } = useContext(ERPContext);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 2300],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1500,
            easing: 'easeOutQuart',
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="dashboard-container p-6 bg-gray-100 min-h-screen">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Dashboard Overview
            </h1>

            {/* Cards */}
            <div className="metrics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card p-6 shadow-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                    <h2 className="text-lg font-semibold mb-2">Inventory Levels</h2>
                    <p className="text-xl">Total Items: {state.inventory.length}</p>
                </div>
                <div className="card p-6 shadow-lg rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300 transform hover:scale-105">
                    <h2 className="text-lg font-semibold mb-2">Total Sales</h2>
                    <p className="text-xl">$12,000</p>
                </div>
            </div>

            {/* Chart */}
            <div className="chart-container mt-10 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales Over Time</h2>
                <div className="relative h-96">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;