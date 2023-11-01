import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails() {
    const [country, setCountry] = useState({});
    const { name } = useParams();
    const [borderingCountries, setBorderingCountries] = useState([]);

    useEffect(() => {
        const getCountryDetails = async () => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            if (res.ok) {
            const data = await res.json();
            setCountry(data[0]);

            const borderPromises = (data[0].borders || []).map((border) =>
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            );
            const borderResponses = await Promise.all(borderPromises);
            const borderCountries = await Promise.all(
                borderResponses.map((response) => response.json())
            );
            setBorderingCountries(borderCountries);
            } else {
            console.error(`Request failed with status: ${res.status}`);
            setCountry(null);
            }
        } catch (error) {
            console.error(error);
            setCountry(null);
        }
        };
        getCountryDetails();
    }, [name]);

    return (
        <>
        <section className='p-8 md:py-0 mx-auto'>
            {country.name ? (
                <div className='grid gap-10 md:grid-cols-2 md:place-items-center md:h-screen'>
                    <article>
                        <Link
                            to='/'
                            className='mb-10 bg-white py-2 px-6 rounded shadow text-gray-900 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover-bg-gray-700 dark:text-gray-400'
                        >
                            &larr; Back
                        </Link>
                        <img src={country.flags?.svg} alt={country.name?.common} className='mt-10' />
                    </article>
                    <article >
                        <h1 className='font-bold text-gray-900 dark:text-white mb-5 text-2xl lg:text-4xl'>
                            {country.name?.common}
                        </h1>
                        <ul className='grid grid-cols-1 gap-2 md:grid-cols-2 dark:text-gray-400'>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <li>
                                <span className='font-bold mb-1 dark:text-gray-100'> Native Name: </span>
                                {country.name?.common || 'N/A'}
                                </li>
                                <li>
                                <span className='font-bold mb-1 dark:text-gray-100'>Population:</span>{' '}
                                {country.population ? country.population.toLocaleString() : 'N/A'}
                                </li>
                                <li>
                                <span className='font-bold mb-1 dark:text-gray-100'>Region:</span> {country.region || 'N/A'}
                                </li>
                                <li>
                                <span className='font-bold mb-1 dark:text-gray-100'>Subregion:</span> {country.subregion || 'N/A'}
                                </li>
                                <li>
                                <span className='font-bold mb-1 dark:text-gray-100'>Capital:</span> {country.capital || 'N/A'}
                                </li>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <li>
                                <span className='font-bold mb-1 dark:text-gray-100'>Top Level Domain:</span> {country.tld || 'N/A'}
                                </li>
                                <li>
                                <span className='font-bold mb-1 dark:text-gray-100'>Currencies:</span>{' '}
                                {country.currencies
                                    ? Object.values(country.currencies).map((currency, index) => currency.name).join(', ')
                                    : 'N/A'}
                                </li>
                                <li>
                                <span className='font-bold mb-1 dark:text-gray-100'>Languages:</span>{' '}
                                {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
                                </li>
                            </div>
                            </ul>
                            {borderingCountries && borderingCountries.length > 0 && (
                                <>
                                <ul className='flex flex-wrap items-start justify-start gap-3 text-gray-700 dark:text-white mt-7'>
                                    <h3 className='text-gray-900 text-lg dark:text-white'>Border Countries:</h3>
                                    {borderingCountries.map((borderCountry, index) => (
                                        <li
                                            key={index}
                                            className='bg-white mb-2 p-2 rounded text-xs shadow dark:bg-gray-700 '
                                        >
                                            {borderCountry[0]?.name?.common}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </article>
                </div>
            ) : (
                <div></div>
            )}
        </section>
    </>
    );
}

export default CountryDetails;
