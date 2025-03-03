import React from 'react';
import Sidebar from '../../Components/SideBar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
      return (
            <div className='flex md:flex-row flex-col gap-2'>
                  <Sidebar />
                  <Routes>
                        <Route path='/' element={<ListProduct />} />
                        <Route path='/add-product' element={<AddProduct />} />
                        <Route path='/list-product' element={<ListProduct />} />
                  </Routes>
            </div>
      );
}

export default Admin;
