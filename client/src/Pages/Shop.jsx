import React from 'react';
import Hero from '../Components/Component/Hero/Hero';
import Category from '../Components/Component/Category/Category';
import Popular from '../Components/Component/Popular/Popular';
import Offers from '../Components/Component/Offers/Offers';
import NewCollections from '../Components/Component/NewCollections/NewCollections';
import NewsLatter from '../Components/Component/NewsLatter/NewsLatter';

const Shop = () => {
      return (
            <div>
                  <Hero />
                  <Category />
                  <Popular />
                  <Offers />
                  <NewCollections />
                  <NewsLatter />
            </div>
      );
};

export default Shop;
