import React from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
      return (
            <div className='bg-gray-800 sticky z-[1000] top-0 flex flex-wrap items-center justify-between mx-auto md:px-8 px-1 py-6'>
                  <Logo />
                  <div>
                        <button className='cursor-pointer'>
                              <FontAwesomeIcon icon={faCircleUser} className='text-3xl text-slate-200' />
                        </button>
                  </div>
            </div>
      );
}

export default Navbar;
