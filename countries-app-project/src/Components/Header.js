import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    return (
        <div className="bg-white dark:bg-gray-700 p-6 m-6 shadow rounded flex flex-row md:flex-row justify-between items-center min-w-[300px]">
            <h2 className="text-xl font-bold dark:text-white mb-4 md:mb-0">Where in the world?</h2>
            <div className="flex items-center mb-4 md:mb-0 md:ml-auto">
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Header;
