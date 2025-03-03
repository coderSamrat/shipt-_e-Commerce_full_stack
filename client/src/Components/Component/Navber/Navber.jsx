import React from 'react';
import Logo from './Logo';
import Navlinks from './Navlinks';

const Navber = () => {
      return (
            <header className='bg-gray-800 sticky z-[1000] top-0 flex flex-wrap items-center justify-between mx-auto md:px-8 px-1 py-6 '>
                  <Logo />
                  <Navlinks />
            </header>
      );
};

export default Navber;
