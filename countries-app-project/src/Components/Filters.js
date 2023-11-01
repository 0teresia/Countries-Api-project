import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Filters({ onSearch, onFilterByRegion, }) {
    const [searchText, setSearchText] = useState('');
    const regions = [
        {
            Name: 'Africa',
        },
        {
            Name: 'Americas',
        },
        {
            Name: 'Asia',
        },
        {
            Name: 'Europe',
        },
        {
            Name: 'Oceania',
        },
        {
            Name: 'Antarctic',
        },
    ];

    const handleSearchCountry = (e) => {
        e.preventDefault();
        onSearch(searchText);
    };

    const handleRegionChange = (event) => {
        const selectedRegion = event.target.value;
        onFilterByRegion(selectedRegion);
    };

    return (
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between '>
            <form onSubmit={handleSearchCountry} autoComplete='off' className='w-1/2'>
                <div className="relative">                
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for a country"
                        required
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="py-2 px-4 pl-10 text-gray-600 dark:text-white placeholder-gray-600 dark:placeholder-white bg-white dark:bg-gray-700 w-full shadow rounded outline-none"
                        />
                        <span className="absolute left-3 top-2/4 transform -translate-y-2/4  text-black dark:text-white cursor-pointer">
                        <AiOutlineSearch size={20} onClick={handleSearchCountry} />
                        </span>
                </div>
            </form>
            <form className='md:flex-2'>
            <select
            name="filter-by-region"
            id="filter-by-region"
            className="w-52 py-2 px-4 outline-none rounded shadow dark:bg-gray-700 dark:text-white"
            onChange={handleRegionChange}
            >
            <option value="">Filter by Region</option>
            {regions.map((region, index) => (
                <option key={index} value={region.Name}>
                {region.Name}
                </option>
            ))}
            </select>
            </form>
        </div>
    );
}
