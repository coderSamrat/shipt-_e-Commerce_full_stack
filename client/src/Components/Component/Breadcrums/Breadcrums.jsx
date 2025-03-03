import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrums = ({ products }) => {

      if (!products) {
            return <div>Product not found!</div>;
      }
      
      const capitalize = () => {
            return products.category.charAt(0).toUpperCase() + products.category.slice(1)
      }
      return (
            <div className='container pt-1 text-sm flex items-center gap-1 text-pink-700'>
                  <Link to='/'>Shop</Link>
                  <span><FontAwesomeIcon icon={faAngleRight} /></span>
                  <Link to={`/${products.category}s`}>{capitalize(products.category)}</Link>
                  <span><FontAwesomeIcon icon={faAngleRight} /></span>
                  <span>{products.name}</span>
            </div>
      )
};

Breadcrums.propTypes = {
      products: PropTypes.object
};
export default Breadcrums;

