// Layout.js

import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='bg-slate-50'>
            <main>
                {children} {/* This is where the content from other components will go */}
            </main>
        </div>
    );
};
