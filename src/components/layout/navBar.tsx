"use client"
import React, { useState } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

const NavBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <nav className="shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex-1 flex items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-amber-400 text-transparent bg-clip-text mb-4">
                        Slang Dictionary
                    </h1>
                </div>
                <div className="flex-1 flex items-center">
                    <div className="relative flex items-center">
                        <FiSearch className="absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="pl-10 pr-4 py-2 border border-amber-50/10 rounded-lg focus:outline-none  w-64"
                        />
                    </div>
                </div>

                <button className="flex items-center gap-2 bg-emerald-900/30 text-white px-4 py-2 rounded-lg transition-colors">
                    <FiPlus />
                    Add
                </button>
            </div>
        </nav>
    );
};

export default NavBar;