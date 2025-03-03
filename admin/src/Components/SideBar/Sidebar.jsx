import { faCartShopping, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
      return (
            <div className='flex md:flex-col flex-row gap-5 pt-10 bg-gray-200 w-full md:max-w-[250px] max-w-none h-screen py-10 flex-wrap md:justify-normal justify-center'>
                  <Link to='/add-product' className='no-underline'>
                        <div className='flex items-center justify-center bg-white gap-2 md:mx-5 m-0 px-3 py-2 rounded-lg'>
                              <FontAwesomeIcon icon={faCartShopping} className='text-4xl text-pink-600' />
                              <span className='text-lg'>Add Product</span>
                        </div>
                  </Link>
                  <Link to='/list-product' className='no-underline'>
                        <div className='flex items-center justify-center bg-white gap-2 md:mx-5 m-0 px-3 py-2 rounded-lg'>
                              <FontAwesomeIcon icon={faListUl} className='text-3xl text-amber-400' />
                              <span className='text-lg'>List Product</span>
                        </div> 
                  </Link>
            </div>
      );
}

export default Sidebar;
