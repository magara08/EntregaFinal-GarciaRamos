import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
	const { cart } = useCart();
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

	if (totalItems === 0) {
		return null;
	}

	return (
		<Link to="/cart" className="relative cursor-pointer">
			<ShoppingCartIcon className="w-8 h-8 text-white" />
			<span className="absolute bottom-0 left-0 w-4 h-4 text-xs text-center rounded-full text-slate-900 bg-pastelYellow">{totalItems}</span>
		</Link>
	)
}

export default CartWidget