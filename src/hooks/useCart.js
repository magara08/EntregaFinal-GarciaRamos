import { useCart as useCartContext } from '../context/CartContext';

export const useCart = () => {
	const { cart, removeItem, clear, updateItemQuantity } = useCartContext();

	const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

	return { cart, removeItem, clear, updateItemQuantity, totalPrice };
};