import React from 'react';
import Navbar from './Components/Component/Navber/Navber';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Components/Component/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';

const App = () => {
      const location = useLocation();
      const isLoginSignup = ['/login', '/signup'].includes(location.pathname);
      return (
            <ShopContextProvider>
                  <div className='font-[Poppins]'>
                        <Navbar />
                        <Outlet />
                        {!isLoginSignup && <Footer />}
                  </div>
            </ShopContextProvider>
      );
};
export default App;
