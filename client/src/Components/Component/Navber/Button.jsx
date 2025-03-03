import React from 'react';

const Button = (props) => {
      return (
            <>
                  <div className='mr-2 md:ml-5 md:w-10 md:h-10 w-8 h-8 md:p-4 p-2 flex items-center justify-center bg-white rounded-full text-pink-600 cursor-pointer'>
                        <button>{props.children}</button>
                  </div>
            </>
      );
};

export default Button;
