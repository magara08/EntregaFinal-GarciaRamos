/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			const updatedCart = cart.map(cartItem => {
				if (cartItem.id === item.id) {
					return { ...cartItem, quantity: cartItem.quantity + quantity };
				}
				return cartItem;
			});
			setCart(updatedCart);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	const removeItem = (itemId) => {
		setCart(cart.filter(item => item.id !== itemId));
	};

	const clear = () => {
		setCart([]);
	};

	const isInCart = (id) => {
		return cart.some(item => item.id === id);
	};

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
			{children}
		</CartContext.Provider>
	);
};
