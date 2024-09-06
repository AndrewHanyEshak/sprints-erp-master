import React, { useContext } from 'react';
import { ERPContext } from '../../context/ERPContext';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Finance = () => {
    const { state } = useContext(ERPContext);

    const totalRevenue = state.financialRecords.reduce((sum, record) => sum + record.revenue, 0);
    const totalExpenses = state.financialRecords.reduce((sum, record) => sum + record.expenses, 0);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Expenses',
                data: state.financialRecords.map(record => record.expenses),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                borderRadius: 8, // Rounded corners for bars
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Revenue',
                data: state.financialRecords.map(record => record.revenue),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderRadius: 8, // Rounded corners for bars
                hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
                hoverBorderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#333',
                    font: {
                        size: 12, // Smaller font size for legend
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.dataset.label}: $${context.parsed.y}`;
                    },
                },
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `$${value}`, // Format y-axis labels with a dollar sign
                    color: '#333',
                    font: {
                        size: 10, // Smaller font size for y-axis ticks
                    },
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)',
                    borderColor: 'rgba(200, 200, 200, 0.5)',
                    borderWidth: 1,
                },
            },
            x: {
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)',
                },
                ticks: {
                    color: '#333',
                    font: {
                        size: 10, // Smaller font size for x-axis ticks
                    },
                },
            },
        },
        animation: {
            duration: 1000, // Duration of animations in milliseconds
            easing: 'easeOutQuart', // Animation easing function
        },
    };

    return (
        <div className="finance-container p-6 bg-gray-50 min-h-screen">
            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center animate-fadeIn">
                Finance Management
            </h1>

            {/* Metrics */}
            <div className="metrics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:bg-green-50">
                    <h2 className="text-lg font-semibold text-green-600 mb-2">Total Revenue</h2>
                    <p className="text-xl font-bold text-gray-800">${totalRevenue.toFixed(2)}</p>
                </div>
                <div className="card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:bg-red-50">
                    <h2 className="text-lg font-semibold text-red-600 mb-2">Total Expenses</h2>
                    <p className="text-xl font-bold text-gray-800">${totalExpenses.toFixed(2)}</p>
                </div>
            </div>

            {/* Chart */}
            <div className="chart-container mt-8 w-full h-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Finance;