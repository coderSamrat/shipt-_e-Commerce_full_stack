import React, { useContext, useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShopContext } from '../../../Context/ShopContext';

const ProductDisplay = (props) => {
      const { products } = props;

      if (!products) {
            return <div>Product details not available</div>;
      }

      const { addToCart } = useContext(ShopContext);


      const capitalize = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
      };

      const [buttonText, setButtonText] = useState('Add To Cart');

      const addToCartHandler = () => {
            addToCart(products.id);
            alert('Item added to cart');
      };

      return (
            <div className='container pt-4'>
                  <div className='flex gap-4 w-full lg:flex-row flex-col lg:p-8 p-4 shadow-3xl rounded object-cover text-gray-600'>
                        <div className='lg:w-[40%] w-full'>
                              <img src={products.image} alt={products.name} className='lg:w-[600px] w-full md:h-[540px] h-[330px] rounded-lg' />
                        </div>
                        <div className='lg:w-[50%] w-full lg:p-10 p-2 space-y-4'>
                              <h1 className='font-bold text-3xl'>{products.name}</h1>
                              <div className='space-y-1 text-amber-500'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    <p className='text-gray-600'>(122)</p>
                              </div>
                              <div className='flex gap-4 font-semibold'>
                                    <div className='line-through'>&#8377;{products.old_price}</div>
                                    <div className='text-pink-600'>&#8377;{products.new_price}</div>
                              </div>
                              <div className='text-md'>
                                    <p>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti totam fugiat suscipit molestias, id sint quia neque itaque cumque inventore nobis voluptates dolores nihil natus praesentium impedit quae blanditiis?
                                    </p>
                              </div>
                              <div className='pt-5'>
                                    <button className='md:px-16 px-10 py-4 bg-amber-400 text-lg text-md font-semibold text-gray-800 rounded hover:bg-amber-500 transition-colors duration-500 btn' onClick={addToCartHandler}>{buttonText}</button>
                              </div>
                              <div className='flex gap-3'>
                                    <span className='font-bold'>Category:</span>
                                    <span>For {capitalize(products.category)}</span>
                              </div>
                              <div className='flex gap-3'>
                                    <span className='font-bold'>Tags:</span>
                                    <span>Modern, Latest</span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductDisplay;
