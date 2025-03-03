import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Component/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/Component/ProductDisplay/ProductDisplay';

const Product = () => {
      const { allProduct } = useContext(ShopContext);
      const { productId } = useParams();

      const products = allProduct && allProduct.find(item => item.id === Number(productId));

      return (
            <div>
                  {products ? (
                        <>
                              <Breadcrums products={products} />
                              <ProductDisplay products={products} />
                        </>
                  ) : (
                        <p>Product not found.</p> 
                  )}
            </div>
      );
};

export default Product;
