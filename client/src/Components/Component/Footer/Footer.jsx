import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
      return (
            <div className='pt-10'>
                  <div className='w-full h-auto bg-pink-600 p-6'>
                        <div className="max-w-[90vw] h-full mx-auto flex flex-col items-center space-y-4">
                              <div className="flex list-none md:gap-4 gap-2 items-center">
                                    <Link to="https://www.facebook.com/coderSamrat/" className='md:w-12 w-8 md:h-12 h-8 inline-flex items-center justify-center bg-gray-100 text-xl rounded-full text-pink-600  cursor-pointer hover:bg-gray-300 transition-colors duration-300'>
                                          <FontAwesomeIcon icon={faFacebookF} />
                                    </Link>
                                    <Link to="https://www.instagram.com/codersamrat/" className='md:w-12 w-8 md:h-12 h-8 inline-flex items-center justify-center bg-gray-100 text-xl rounded-full text-pink-600  cursor-pointer hover:bg-gray-300 transition-colors duration-300'>
                                          <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                    <Link to="https://www.linkedin.com/in/samrat-mallick-coder832/" className='md:w-12 w-8 md:h-12 h-8 inline-flex items-center justify-center bg-gray-100 text-xl rounded-full text-pink-600  cursor-pointer hover:bg-gray-300 transition-colors duration-300'>
                                          <FontAwesomeIcon icon={faLinkedinIn} />
                                    </Link>
                                    <Link to="https://github.com/coderSamrat" className='md:w-12 w-8 md:h-12 h-8 inline-flex items-center justify-center bg-gray-100 text-xl rounded-full text-pink-600  cursor-pointer hover:bg-gray-300 transition-colors duration-300'>
                                          <FontAwesomeIcon icon={faGithub} />
                                    </Link>
                              </div>
                              <div className='w-full h-[1px] bg-gray-300'></div>
                              <div className="font-bold text-gray-200 text-md">
                                    <p>&copy; {new Date().getFullYear()} <Link to='' className='hover:underline ' onClick={() => window.scrollTo(0, 0)} >ShiPt</Link> | Designed by <Link to="https://www.linkedin.com/in/samrat-mallick-coder832/" className='hover:underline ' >Samrat Mallick </Link> | All Rights Reserved</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;
