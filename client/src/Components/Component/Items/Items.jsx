import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Items = (props) => {
      return (
            <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
                  <div className='shadow-5xl hover:shadow-3xl rounded hover:rounded-none transition duration-500 group'>
                        <div className="flex flex-col justify-between">
                              <div className="w-full md:h-[350px] h-full rounded">
                                    <img className='w-full h-full rounded group-hover:rounded-none select-none transition duration-500' src={props.image} alt={props.name} />
                              </div>
                              <div className="space-y-4 p-2">
                                    <h2 className='text-slate-600 text-xl font-bold'> {props.name} </h2>
                                    <span className='flex gap-4'>
                                          <p className='text-gray-600 line-through text-lg'> <span>&#8377;</span>{props.old_price} </p>
                                          <p className='text-pink-600 font-semibold text-lg'> <span>&#8377;</span>{props.new_price} </p>
                                    </span>
                              </div>
                        </div>
                  </div>
            </Link>
      );
};

Items.propTypes = {
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      old_price: PropTypes.number.isRequired,
      new_price: PropTypes.number.isRequired
};

export default Items;
