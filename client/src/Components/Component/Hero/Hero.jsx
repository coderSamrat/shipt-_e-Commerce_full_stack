import React, { useEffect, useState } from 'react';
import banner_1 from '../../Assets/banner_1.jpg';
import banner_2 from '../../Assets/banner_2.jpg';
import banner_3 from '../../Assets/banner_3.jpg';
import banner_4 from '../../Assets/banner_4.jpg';
import banner_5 from '../../Assets/banner_5.jpg';
import banner_6 from '../../Assets/banner_6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
      const banners = [
            banner_1, banner_2, banner_3, banner_4, banner_5, banner_6
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
            setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
      };

      const nextSlide = () => {
            setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
      };

      useEffect(() => {
            const interval = setInterval(() => {
                  nextSlide();
            }, 3000);

            return () => clearInterval(interval);
      }, [currentIndex]);

      return (
            <div className="py-1 px-2 select-none">
                  <div className="w-full lg:h-[85vh] h-full relative group">
                        <img src={banners[currentIndex]} alt="" className='w-full h-full object-cover rounded-lg' />
                        <div className="absolute lg:top-[50%] top-[40%] hidden items-center justify-between w-full md:px-10 px-5 group-hover:flex ">
                              <span className='w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-zinc-200 cursor-pointer' onClick={prevSlide}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                              </span>
                              <span className='w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-zinc-200 cursor-pointer' onClick={nextSlide}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                              </span>
                        </div>
                  </div>
            </div>
      );
};

export default Hero;
