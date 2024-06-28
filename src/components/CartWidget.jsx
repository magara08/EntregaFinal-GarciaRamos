import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const CartWidget = () => {
	return (
		<div className="relative cursor-pointer">
			<ShoppingCartIcon className="w-8 h-8 text-white" />
			<span className="absolute bottom-0 left-0 w-4 h-4 text-xs text-center rounded-full text-slate-900 bg-pastelYellow">3</span>
		</div>
	)
}

export default CartWidget