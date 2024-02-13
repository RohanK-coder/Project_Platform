import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function GCPage() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:8000/api/technologies')
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const listItems = details.map(detail => (
    <li key={detail._id}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-10 mb-10 mt-10">
        <Link to={`/technologies/${detail._id}`}>
          <img className="rounded-t-lg" src={detail.imageUrl} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/technologies/${detail._id}`}>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">provider: {detail.provider}</p>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {detail.location}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Affiliated: {detail.affiliated}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Solution Type: {detail.solutionType}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sector: {detail.sector}</p>
          <Link to={`/technologies/${detail._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="container mx-auto">
      <ul className='flex align-center justify-center flex-wrap w-15'>{listItems}</ul>
    </div>
  );
}
