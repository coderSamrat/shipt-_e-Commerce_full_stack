import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constant.js';
const Signup = () => {
      const [formdata, setFormData] = useState({
            fullname: '',
            email: '',
            password: '',
      });

      const navigate = useNavigate();

      const handleChange = (e) => {
            setFormData({ ...formdata, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                  const response = await fetch(`${BASE_URL}/api/v1/user/sign-up`, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                              Accept: 'application/json',
                        },
                        body: JSON.stringify(formdata),
                  });

                  const data = await response.json();
                  console.log(data);
                  

                  if (data.success) {
                        alert(data.message);
                        setFormData({
                              fullname: '',
                              email: '',
                              password: '',
                        });
                        navigate('/login');
                  } else {
                        alert(data.message);
                  }
            } catch (error) {
                  console.error(error);
            }
      };

      return (
            <div className="flex items-center justify-center h-screen bg-gray-200 px-2">
                  <form onSubmit={handleSubmit} className="shadow-3xl rounded md:px-8 px-3 pt-6 pb-8 mb-4 w-96">
                        <h2 className="text-center mb-6 text-gray-600 text-2xl font-bold">Sign Up</h2>

                        <div className="mb-4">
                              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="fullname">
                                    Full Name
                              </label>
                              <input
                                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-1 focus:outline-pink-500"
                                    id="fullname"
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    name="fullname"
                                    value={formdata.fullname}
                                    onChange={handleChange}
                              />
                        </div>

                        <div className="mb-4">
                              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                              </label>
                              <input
                                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-1 focus:outline-pink-500"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formdata.email}
                                    onChange={handleChange}
                              />
                        </div>

                        <div className="mb-6">
                              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-1 focus:outline-pink-500"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                    autoComplete="current-password"
                                    name="password"
                                    value={formdata.password}
                                    onChange={handleChange}
                              />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                              <button
                                    className="bg-pink-500 hover:bg-pink-600 text-gray-200 font-bold w-full py-2 px-4 rounded focus:outline-1 focus:outline-pink-500"
                                    type="submit"
                              >
                                    Create An Account
                              </button>
                        </div>

                        <div className="flex items-center justify-end mb-4">
                              <a href="#" className="underline text-gray-600 hover:text-pink-600">
                                    Forgot Password
                              </a>
                        </div>

                        <div className="text-gray-600 mb-4">
                              <input type="checkbox" name="" id="terms" className="cursor-pointer" />
                              <label htmlFor="terms" className="text-sm">
                                    By continuing, I accept the terms of use & privacy policy
                              </label>
                        </div>

                        <div>
                              <p className="text-center text-gray-500 text-sm">
                                    Already have an account?{' '}
                                    <Link to="/login" className="hover:underline text-md hover:text-blue-600 font-semibold">
                                          Login Here
                                    </Link>
                              </p>
                        </div>
                  </form>
            </div>
      );
};

export default Signup;
