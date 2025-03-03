import React from 'react'
import PropTypes from 'prop-types';

const CategoryCard = (props) => {
      return (
            <div className='border border-gray-300 rounded-lg hover:rounded-none shadow-none hover:shadow-3xl transition duration-500'>
                  <div className="flex items-center justify-between md:p-6 p-3">
                        <div className="space-y-4">
                              <h2 className='text-slate-600 text-xl font-bold'> {props.name} </h2>
                              {/* <p className='text-gray-600 text-lg'> {props.count} </p> */}
                        </div>
                        <div className="md:w-24 w-16 md:h-24 h-16">
                              <img className='object-cover w-full h-full rounded-full select-none' src={props.img} alt={props.name} />
                        </div>
                  </div>
            </div>
      );
};
CategoryCard.propTypes = {
      img:PropTypes.string,
      name:PropTypes.string,
      count:PropTypes.string
};
export default CategoryCard;

