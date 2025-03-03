import React from 'react';
import category_data from '../../Assets/category_data';
import CategoryCard from './CategoryCard';

const Category = () => {
      return (
            <div className='container md:pt-12 pt-5'>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {
                              category_data.map((item) => {
                                    return (
                                          <CategoryCard
                                                key={item.id}
                                                id={item.id}
                                                img={item.img}
                                                name={item.name}
                                                count={item.count}
                                          />
                                    );
                              })
                        }
                  </div>
            </div>
      );
};

export default Category;
