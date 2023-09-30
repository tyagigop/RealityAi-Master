import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialRowCount = 5;
const additionalRowCount = 5;

const data = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 32, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 24, city: 'Chicago' },
    { id: 4, name: 'Emily Brown', age: 29, city: 'San Francisco' },
    { id: 5, name: 'William Davis', age: 35, city: 'Seattle' },
    { id: 6, name: 'Olivia Wilson', age: 27, city: 'Miami' },
    { id: 7, name: 'James Lee', age: 31, city: 'Dallas' },
    { id: 8, name: 'Sophia Turner', age: 26, city: 'Boston' },
    { id: 9, name: 'Alexander Martinez', age: 30, city: 'Houston' },
    { id: 10, name: 'Ava White', age: 33, city: 'Atlanta' },
    { id: 11, name: 'Ethan Jackson', age: 28, city: 'Denver' },
    { id: 12, name: 'Mia Taylor', age: 25, city: 'Phoenix' },
    { id: 13, name: 'Noah Harris', age: 29, city: 'Portland' },
    { id: 14, name: 'Isabella Clark', age: 31, city: 'San Diego' },
    { id: 15, name: 'Liam Hall', age: 27, city: 'Austin' },
    { id: 16, name: 'Emma Young', age: 34, city: 'Nashville' },
    { id: 17, name: 'Jacob Turner', age: 30, city: 'Philadelphia' },
    { id: 18, name: 'Oliver Adams', age: 26, city: 'Detroit' },
    { id: 19, name: 'Ava Walker', age: 32, city: 'Minneapolis' },
    { id: 20, name: 'Sophia Green', age: 28, city: 'Orlando' },
];


export default function Table() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/vastu-detail'); // Redirect to the home page
    };

    const [rowCount, setRowCount] = useState(initialRowCount);

    const handleViewMore = () => {
        setRowCount(rowCount + additionalRowCount);
    };

    return (
        <div className="mt-4">
            <div className='overflow-x-auto'>
                <table className="w-full border-collapse border rounded-lg">
                    <thead>
                        <tr>
                            <th className="p-2 bg-gray-100 border whitespace-nowrap ">Tower</th>
                            <th className="p-2 bg-gray-100 border whitespace-nowrap ">Config</th>
                            <th className="p-2 bg-gray-100 border whitespace-nowrap ">Size</th>
                            <th className="p-2 bg-gray-100 border whitespace-nowrap ">Series</th>
                            <th className="p-2 bg-gray-100 border whitespace-nowrap ">Score</th>
                            {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(0, rowCount).map((item, index) => (
                            <tr key={index} className="border" onClick={handleClick}>
                                <td className="p-2 border cursor-pointer">{item.id}</td>
                                <td className="p-2 border cursor-pointer">{item.name}</td>
                                <td className="p-2 border cursor-pointer">{item.age}</td>
                                <td className="p-2 border cursor-pointer">{item.city}</td>
                                <td className="p-2 border cursor-pointer">{item.city}</td>
                                {/* Add more data columns as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {rowCount < data.length && (


                <div onClick={handleViewMore} className="bg-transparent p-4 md:bottom-16 lg:bottom-20 flex justify-center items-center ">
                    <button className={`${true == true ? "bg-[#00B3DA] text-white" : "bg-transparent"} border border-gray-300 rounded-lg w-96 h-12 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500`}>
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

