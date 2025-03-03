import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const ListProduct = () => {
      const [allProduct, setallProduct] = useState([]);

      const response = async () => {
            try {
                  const response = await fetch('http://localhost:9883/api/v1/product/get-all-product', {
                        method: 'GET',
                  });
                  const data = await response.json();
                  setallProduct(data.data);
                  console.log(data.data);
            } catch (error) {
                  console.error('Error:', error.message);
            }
      };

      const handleRemoveProduct = async (productId) => {
            try {
                  await fetch(`http://localhost:9883/api/v1/product/remove-product`, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                              Accept: 'application/json'
                        },
                        body: JSON.stringify({ id: productId }),
                  });
                  await response();
            } catch (error) {
                  console.error('Error:', error.message);
            }
      };

      useEffect(() => {
            response();

      }, []);

      return (
            <div className="lg:px-5 px-2 py-6 w-full ">
                  <h2 className="text-2xl font-semibold text-center mb-6">All Product List</h2>
                  <div className="grid md:grid-cols-6 grid-cols-5 place-content-center w-full h-20 rounded bg-gray-100 text-gray-600 md:gap-4 gap-2 lg:text-lg text-sm font-semibold px-2 items-center text-wrap">
                        <h2 className="md:col-span-2">Product</h2>
                        <h2>Old Price</h2>
                        <h2>New Price</h2>
                        <h2 className='text-wrap'>Category</h2>
                        <h2>Remove Product</h2>
                  </div>
                  <div className="w-full h-full">
                        {allProduct.map((product, index) => (
                              <div className='w-full'>
                                    <div key={index} className='w-full grid md:grid-cols-6 grid-cols-5 mb-4 py-2 text-gray-600 items-center gap-3 text-lg'>
                                          <div className='flex items-center md:col-span-2 grid-cols-none gap-2 lg:flex-row flex-col'>
                                                <img src={product.image} alt={product.name} className='lg:w-28 w-20 lg:h-28 h-20 object-center' />
                                                <h2 className='text-wrap'>{product.name}</h2>
                                          </div>
                                          <h3 >&#8377; {product.old_price}</h3>
                                          <h3 >&#8377; {product.new_price}</h3>
                                          <h3 >{product.category}</h3>
                                          <button className="hover:text-red-600 duration-300 cursor-pointer" onClick={() => handleRemoveProduct(product.id)}>
                                                <FontAwesomeIcon icon={faRemove} />
                                          </button>
                                    </div>
                                    <div className='w-full h-0.5 bg-gray-600'></div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default ListProduct;
