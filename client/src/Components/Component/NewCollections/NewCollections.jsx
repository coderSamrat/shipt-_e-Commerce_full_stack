import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import { BASE_URL } from '../../../constant';

const NewCollections = () => {
      const [newCollections, setNewCollection] = useState([]);
            const fetchProducts = async () => {
                  const response = await fetch(`${BASE_URL}/api/v1/product/get-new-collection-product`);
                  const data = await response.json();
                  setNewCollection(data.data);
                  // console.log(data.data);
            }
            useEffect(() => {
                  fetchProducts();
            }, [])
      return (
            <div className="container pt-12 space-y-4">
                  <div className="w-full flex flex-col items-center gap-2 ">
                        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-gray-600">New Collections</h1>
                        <div className='md:w-[20%] w-[25%] h-1 bg-gray-600'></div>
                  </div>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        {
                              newCollections.map((item) => {
                                    return (
                                          <Items 
                                                key={item.id}
                                                id={item.id}
                                                image={item.image}
                                                name={item.name}
                                                old_price={item.old_price}
                                                new_price={item.new_price}
                                          />
                                    )
                              })
                        }
                  </div>
            </div>
      );
};

export default NewCollections;
