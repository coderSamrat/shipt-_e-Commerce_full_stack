import upload_file from '../../Assets/upload_cloud_icon.svg';
import React, { useState } from 'react';

const AddProduct = () => {
      const [image, setImage] = useState(null);
      const [productDetails, setProductDetails] = useState({
            name: '',
            old_price: '',
            new_price: '',
            image: '',
            category: 'men',
      });

      const handleImageChange = (e) => {
            setImage(e.target.files[0]);
      }

      const handleChangeProductDetails = (e) => {
            setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
      }

      const handleAddProduct = async () => {
            console.log(productDetails);

            let product = productDetails;
            const formData = new FormData();
            formData.append('image', image);

            try {
                  const response = await fetch('http://localhost:9883/api/v1/product/upload/upload-image', {
                        method: 'POST',
                        body: formData,
                  });

                  const responseData = await response.json();
                  if (responseData.success) {
                        product.image = responseData.data.image_url;
                        console.log(product);
                        await fetch('http://localhost:9883/api/v1/product/add-product', {
                              method: 'POST',
                              headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json'
                              },
                              body: JSON.stringify(product),
                        }).then(result => result.json()).then(result => result.success?alert('Product added successfully'): alert('Failed') );
                  }
            } catch (error) {
                  throw new Error(error.message);
            }
      };


      return (
            <div className="md:max-w-[800px] max-w-none w-full mx-auto p-6 bg-slate-100 border border-gray-100 rounded-lg h-fit mt-10">
                  <h2 className="text-2xl font-semibold text-center mb-6">Add New Product</h2>

                  <div className="space-y-4">
                        <div className='md:w-full w-auto'>
                              <label htmlFor="product-name" className="block text-gray-700 font-semibold text-lg">Product Name :</label>
                              <input
                                    id="product-name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter here..."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
                                    value={productDetails.name}
                                    onChange={handleChangeProductDetails}
                              />
                        </div>
                        <div className="flex items-center justify-between md:w-full w-auto gap-4">
                              <div className='w-full'>
                                    <label htmlFor="old-price" className="block text-gray-700 font-semibold text-lg">Product Price :</label>
                                    <input
                                          id="old-price"
                                          type="number"
                                          name="old_price"
                                          placeholder="Enter here..."
                                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none price"
                                          value={productDetails.old_price}
                                          onChange={handleChangeProductDetails}
                                    />
                              </div>
                              <div className='w-full'>
                                    <label htmlFor="new-price" className="block text-gray-700 font-semibold text-lg">Offer Price :</label>
                                    <input
                                          id="new-price"
                                          type="number"
                                          name="new_price"
                                          placeholder="Enter here..."
                                          className="w-full p-3 border  border-gray-300 rounded-lg focus:outline-none price"
                                          value={productDetails.new_price}
                                          onChange={handleChangeProductDetails}
                                    />
                              </div>
                        </div>
                        <div className='w-full flex items-center gap-2 flex-wrap'>
                              <label htmlFor="category" className="block text-gray-700 font-semibold text-lg">Product Category :</label>
                              <div className="relative">
                                    <select
                                          id="category"
                                          name="category"
                                          className="px-5 py-3 border border-gray-300 rounded-lg focus:outline-none pr-10"
                                          value={productDetails.category}
                                          onChange={handleChangeProductDetails}
                                    >
                                          <option value="men">Men</option>
                                          <option value="women">Women</option>
                                          <option value="kid">Kid</option>
                                    </select>
                              </div>
                        </div>
                        <div className='flex items-center'>
                              <label htmlFor="file-input" className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 w-32 h-32 p-2">
                                    <img src={image ? URL.createObjectURL(image) : upload_file} className='object-contain w-full h-full rounded-lg' />
                                    <input
                                          type="file"
                                          id="file-input"
                                          name='image'
                                          className="hidden"
                                          onChange={handleImageChange}
                                    />
                              </label>
                        </div>
                        <div className="mt-6">
                              <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none cursor-pointer"
                                    onClick={() => handleAddProduct()}
                              >
                                    Add Product
                              </button>
                        </div>
                  </div>
            </div>
      );
}

export default AddProduct;
