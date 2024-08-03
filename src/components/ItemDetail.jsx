/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
	const { id, title, genre, price, images, stock, tracklist } = product;
	const [quantityAdded, setQuantityAdded] = useState(0);
	const navigate = useNavigate();
	const { addItem } = useCart();

	const handleAdd = (quantity) => {
		setQuantityAdded(quantity);
		addItem(product, quantity);
		console.log(`Agregado ${quantity} ítems de ${title} al carrito`);
	};

	const handleCheckout = () => {
		navigate('/cart');
	};

	return (
		<div className="flex max-w-4xl p-6 mx-auto space-x-6 bg-white rounded-lg shadow-lg">
			<div className="relative w-[300px] h-[300px] bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
				<img
					src={images.cover}
					alt={title}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="flex-1">
				<h2 className="mb-2 text-3xl font-bold text-pastelViolet">{title}</h2>
				<p className="mb-4 text-left text-gray-700">Género: {genre.join(', ')}</p>
				<p className="mb-4 text-3xl font-semibold text-gray-900">{formatCurrency(price)}</p>
				<h3 className="mb-2 text-xl font-bold text-pastelViolet">Lista de Canciones</h3>
				<ul className="mb-4 text-left text-gray-700">
					{tracklist.map((track, index) => (
						<li key={index}>{track}</li>
					))}
				</ul>
				{quantityAdded > 0 ? (
					<button
						onClick={handleCheckout}
						className="px-4 py-2 text-white bg-blue-600 rounded"
					>
						Terminar mi compra
					</button>
				) : (
					<ItemCount stock={stock} initial={1} onAdd={handleAdd} />
				)}
			</div>
		</div>
	);
};

export default ItemDetail;
