import React, { useContext } from 'react';
import { ShopContext } from '../../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const CartItemsCard = () => {
      const { allProduct, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

      return (
            <>
                  {
                        allProduct && allProduct.map((e) => {
                              const cartItemCount = cartItems && cartItems[e.id] ? cartItems[e.id] : 0;
                              if (cartItemCount > 0) {
                                    return (
                                          <div className='w-full grid grid-cols-5 mb-4 border py-2 text-gray-600' key={e.id}>
                                                <div className="flex col-span-5 md:col-span-2 items-center md:gap-4 gap-2 ml-4">
                                                      <FontAwesomeIcon
                                                            icon={faRemove}
                                                            className=" hover:text-red-500 duration-300 cursor-pointer"
                                                            onClick={() => { removeFromCart(e.id) }}
                                                      />
                                                      <img src={e.image} alt="" className='lg:w-32 w-20 lg:h-32 h-20' />
                                                      <h1 className='font-semibold md:text-lg text-md'>{e.name}</h1>
                                                </div>
                                                <div className='col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 md:px-0 gap-6 md:gap-0 flex-wrap'>
                                                      <div className="flex w-1/3 items-center text-lg font-semibold">
                                                            &#8377;{e.new_price}
                                                      </div>
                                                      <div className="w-1/3 flex items-center lg:gap-6 gap-3 text-lg">
                                                            <span
                                                                  onClick={() => { removeFromCart(e.id) }}
                                                                  className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300 select-none"
                                                            >
                                                                  -
                                                            </span>
                                                            {cartItemCount}
                                                            <span
                                                                  onClick={() => { addToCart(e.id) }}
                                                                  className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300 select-none"
                                                            >
                                                                  +
                                                            </span>
                                                      </div>
                                                      <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
                                                            <p>&#8377;{e.new_price * cartItemCount}</p>
                                                      </div>
                                                </div>
                                          </div>
                                    )
                              }
                              return null;
                        })
                  }
            </>
      );
};

export default CartItemsCard;
