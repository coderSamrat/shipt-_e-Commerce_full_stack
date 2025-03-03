import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constant.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
      let cart = {};
      for (let i = 1; i <= 300; i++) {
            cart[i] = 0;
      }
      return cart;
};

const ShopContextProvider = (props) => {
      const [cartItems, setCartItems] = useState(getDefaultCart());
      const [allProduct, setAllProduct] = useState([]);
      const [user, setUser] = useState(null);

      const fetchProducts = async () => {
            try {
                  const response = await fetch(`${BASE_URL}/api/v1/product/get-all-product`, {
                        method: 'GET',
                  });
                  const data = await response.json();
                  if (data?.data) {
                        setAllProduct(data.data);
                  } else {
                        console.error('Error:', data.message);
                  }
            } catch (error) {
                  console.error('Error:', error.message);
            }
      };

      const fetchCartData = async () => {
            try {
                  const response = await fetch(`${BASE_URL}/api/v1/user/get-cart-data`, {
                        method: 'GET',
                        headers: {
                              Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                  });
                  const data = await response.json();
                  if (data.success) {
                        setCartItems(data.data);
                  } else {
                        console.error('Error fetching cart data:', data.message);
                  }
            } catch (error) {
                  console.error('Error fetching cart data:', error.message);
            }
      };

      useEffect(() => {
            fetchProducts();
      }, []);

      useEffect(() => {
            if (localStorage.getItem('token')) {
                  fetchCartData();
            }
      }, [user]);

      const addToCart = async (itemId) => {
            try {
                  const response = await fetch(`${BASE_URL}/api/v1/user/add-to-cart`, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                        body: JSON.stringify({ itemId }),
                  });
                  const data = await response.json();
                  if (data.success) {
                        setCartItems(data.data);
                  } else {
                        console.error('Failed to add item to cart:', data.message);
                  }
            } catch (error) {
                  console.error('Error adding item to cart:', error.message);
            }
      };

      const removeFromCart = async (itemId) => {
            if (!itemId) {
                  console.error("Item ID is required.");
                  return;
            }

            try {
                  const response = await fetch(`${BASE_URL}/api/v1/user/remove-from-cart`, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                        body: JSON.stringify({ itemId }),
                  });

                  const data = await response.json();
                  if (data.success) {
                        setCartItems(prevCartItems => ({
                              ...prevCartItems,
                              [itemId]: Math.max(prevCartItems[itemId] - 1, 0),
                        }));
                  } else {
                        console.error('Failed to remove item from cart:', data.message);
                  }
            } catch (error) {
                  console.error('Error removing item from cart:', error.message);
            }
      };


      const handleLogout = () => {
            localStorage.removeItem('token');
            setUser(null);
            setCartItems(getDefaultCart());
      };

      const getCartTotalAmount = () => {
            let totalAmount = 0;
            for (const item in cartItems) {
                  if (cartItems[item] > 0) {
                        let itemInfo = allProduct.find((product) => product.id === Number(item));
                        totalAmount += cartItems[item] * itemInfo.new_price;
                  }
            }
            return totalAmount;
      };

      const getCartTotalItems = () => {
            let totalItems = 0;
            for (const item in cartItems) {
                  if (cartItems[item] > 0) {
                        totalItems += cartItems[item];
                  }
            }
            return totalItems;
      };

      const resetCart = async () => {
            try {
                  const response = await fetch(`${BASE_URL}/api/v1/user/reset-cart`, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                  });

                  const data = await response.json();
                  if (data.success) {
                        setCartItems(getDefaultCart());
                  } else {
                        console.error('Failed to reset cart:', data.message);
                  }
            } catch (error) {
                  console.error('Error resetting cart:', error.message);
            }
      };


      const contextValue = {
            allProduct,
            cartItems,
            addToCart,
            removeFromCart,
            getCartTotalAmount,
            getCartTotalItems,
            resetCart,
            handleLogout,
      };

      return (
            <ShopContext.Provider value={contextValue}>
                  {props.children}
            </ShopContext.Provider>
      );
};

export default ShopContextProvider;
