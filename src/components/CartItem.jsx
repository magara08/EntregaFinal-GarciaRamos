/* eslint-disable react/prop-types */
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils';
import ItemCount from './ItemCount';

const CartItem = ({ item, openModal }) => {
	const { updateItemQuantity } = useCart();
	const [quantity, setQuantity] = useState(item.quantity);
	const [isEditing, setIsEditing] = useState(false);

	const handleQuantityChange = (newQuantity) => {
		setQuantity(newQuantity);
		updateItemQuantity(item.id, newQuantity);
		setIsEditing(false); // Ocultar ItemCount y mostrar el botón "Editar Cantidad"
	};

	return (
		<li className="flex flex-col items-center justify-between p-4 space-y-4 bg-white rounded shadow-lg md:flex-row md:space-y-0 md:space-x-4 ">
			<div className="flex items-start w-full space-x-4 text-left md:w-auto">
				<img src={item.thumbnail} alt={item.title} className="w-24 h-auto rounded shadow-sm" />
				<div className="flex flex-col space-y-2 grow">
					<h3 className="text-lg font-semibold text-pastelViolet">{item.title}</h3>
					<p className="text-sm text-gray-600">Cantidad: {quantity}</p>
					<p className="text-sm text-gray-600">Precio: <span className="font-bold">{formatCurrency(item.price)}</span></p>
					{isEditing ? (
						<ItemCount
							stock={item.stock}
							initial={quantity}
							onAdd={handleQuantityChange}
							buttonText="Actualizar"
						/>
					) : (
						<button
							onClick={() => setIsEditing(true)}
							className="flex items-center px-3 py-2 mt-2 text-sm font-semibold text-white rounded cursor-pointer bg-pastelViolet hover:bg-pastelPink w-fit"
						>
							<PencilIcon className="w-4 h-4 mr-1" /> Editar Cantidad
						</button>
					)}
				</div>
			</div>
			<button
				onClick={() => openModal('remove', item)}
				className="flex items-center justify-center w-10 h-10 text-pastelViolet hover:text-pastelPink"
			>
				<TrashIcon className="w-6 h-6" />
			</button>
		</li>
	);
};

export default CartItem;