import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStudiovinari } from '@fortawesome/free-brands-svg-icons';

const Logo = () => {
      const scrollToTop = () => {
            window.scrollTo(0, 0);
      };

      return (
            <div className='cursor-pointer font-bold font-Playfair md:text-3xl text-xl tracking-wide select-none'>
                  <NavLink to='/' className='flex md:gap-2 gap-1' onClick={scrollToTop}>
                        <span className='text-pink-600'>
                              <FontAwesomeIcon icon={faStudiovinari} />
                        </span>
                        <span className='text-slate-200 flex flex-col'>
                              <span>ShiPt</span>
                              <span className='text-xs'>Admin Panel</span>
                        </span>
                  </NavLink>
            </div>
      );
};

export default Logo;
