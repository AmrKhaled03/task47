import React, { useContext } from 'react';
import { TheContext } from '../context/MyContext';

const Footer = () => {
  const date = new Date();
  const day = date.getDate(); // getDate() returns the day of the month
  const month = date.getMonth() + 1; // getMonth() returns month index (0-11), so add 1
  const year = date.getFullYear(); // getFullYear() returns the full year

  const theDate = `${day}-${month}-${year}`; // Format the date as day-month-year

  const { dark } = useContext(TheContext);

  return (
    <div className='footer text-center w-100 mt-5 p-5'>
      <div className='container w-100'>
        <div className='row'>
          <div className='col-12'>
            <small className={dark ? 'text-light' : 'text'}>
              Made by <strong className='badge text-bg-success p-2'>
                Amr Khaled Marey
              </strong> at {theDate}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
