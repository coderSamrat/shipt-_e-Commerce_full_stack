import React, { useState, useEffect } from 'react';
import offer1 from '../../Assets/offer_1.jpg';
import offer2 from '../../Assets/offer_2.jpg';
import offer3 from '../../Assets/offer_3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Offers = () => {
      const offer = [
            offer1, offer2, offer3
      ];
      const [counter, setCounter] = useState(0);
      const prevSlide = () => {
            setCounter(counter === 0 ? offer.length - 1 : counter - 1);
      };
      const nextSlide = () => {
            setCounter(counter === offer.length - 1 ? 0 : counter + 1);
      };

      useEffect(() => {
            const intervel = setTimeout(() => {
                  nextSlide();
            }, 3000)
            return () => clearTimeout(intervel);
      }, [counter]);

      return (
            <div className='md:container pt-16'>
                  <div className="xl:w-[70%] md:w-[80%] sm:w-full xl:h-[45vh] h-auto bg-pink-600 rounded md:p-6 p-2 mx-auto">
                        <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
                              <div className='flex flex-col gap-4 text-gray-300'>
                                    <h1 className='lg:text-5xl text-3xl font-extrabold'>Exclusive</h1>
                                    <h2 className='font-bold text-2xl'>Offers For You</h2>
                                    <p className='text-xl'>ONLY ON BEST SELLERS PRODUCTS</p>
                              </div>
                              <div className='w-full h-full flex items-center lg:justify-end justify-center overflow-hidden'>
                                    <div className="md:w-72 w-60 md:h-72 h-60 relative group">
                                          <img src={offer[counter]} className='object-cover w-full h-full rounded-lg' />
                                          <div className="absolute lg:top-[45%] top-[40%] hidden items-center justify-between w-full  px-5 group-hover:flex ">
                                                <span className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-zinc-200 cursor-pointer' onClick={prevSlide}>
                                                      <FontAwesomeIcon icon={faAngleLeft} />
                                                </span>
                                                <span className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-zinc-200 cursor-pointer' onClick={nextSlide}>
                                                      <FontAwesomeIcon icon={faAngleRight} />
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Offers;
