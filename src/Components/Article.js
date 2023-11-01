import React from 'react';
import { Link } from 'react-router-dom';

function Article({ flags, name, population, region, capital }) {

    return <>
    <Link to= {`/${name.common}`}>
    <article className='bg-gray-50 hover:white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 shadow'>
        <img src={flags.svg} alt='' className='md:h-60 w-full object-cover' />
        <div className='p-4 dark:bg-gray-700'>
          <h2 className='font-bold mb-5 text-gray-900 dark:text-white'>{name.common}</h2>
          <ul  className='flex flex-col items-start justify-start dark:text-gray-400'>
            <li> <span className='text-black dark:text-gray-100'>Population:</span> <span className='text-gray-600 dark:text-gray-400'>{population.toLocaleString()}</span></li>
            <li> <span className='text-black dark:text-gray-100'>Region:</span> <span className='text-gray-600 dark:text-gray-400'> {region}</span></li>
            <li> <span className='text-black dark:text-gray-100'>Capital:</span> <span className='text-gray-600 dark:text-gray-400'>{capital} </span></li>
          </ul>
        </div>
      </article>
    </Link>
    </>
}

export default Article;

