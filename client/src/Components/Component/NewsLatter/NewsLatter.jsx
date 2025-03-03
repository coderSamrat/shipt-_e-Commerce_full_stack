import React from 'react';

const NewsLatter = () => {
      return (
            <div className='lg:container pt-16'>
                  <div className="xl:w-[70%] md:w-[80%] sm:w-full xl:h-[30vh] md:h-[40vh] h-auto bg-pink-600 rounded md:p-6 p-2 mx-auto">
                        <div className="w-full h-full flex items-center justify-center flex-col space-y-4 p-2">
                              <h1 className='text-gray-200 font-bold md:text-4xl text-2xl'>Get Exclusive Offers to Subscribe Our NewsLatter</h1>
                              <form className='w-full  mb-2 flex flex-col items-center justify-center gap-4 text-lg'>
                                    <input type="email" placeholder='Enter Your Email Address' required className='md:w-[60%] w-full border-0 outline-0 px-8 py-4 rounded-full text-md text-gray-600 bg-gray-200' />
                                    <button className=' lg:w-60 w-36 py-4 font-bold cursor-pointer bg-gray-800 text-gray-200 rounded-full tracking-widest text-xl'>Subscribe</button>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default NewsLatter;
