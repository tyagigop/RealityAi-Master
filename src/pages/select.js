// src/components/Select.js
import React from 'react';

export default function Select({ options, value, onChange }) {
    return (
        <select
            className="block w-2/6 p-2 border rounded-md focus:ring focus:ring-opacity-50"
            value={value}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
