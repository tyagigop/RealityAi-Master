import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    var Airtable = require('airtable');
    Airtable.configure({ apiKey: 'patTEtG8lwLpOtOEh.820f40de04e7647f999f900fcfe493c5853d4e5aa7e5e3dd585d2d6b10773c91' })

    // const [airTable, setAirTable] = useState(Airtable);

    return (
        <MyContext.Provider value={{ AirTable: Airtable }}>
            {children}
        </MyContext.Provider>
    );
};

export const useAirTable = () => {
    const context = useContext(MyContext);
    // console.log(context);
    if (!context) {
        throw new Error('usetable must be used within MyProvider');
    }
    return context;
};