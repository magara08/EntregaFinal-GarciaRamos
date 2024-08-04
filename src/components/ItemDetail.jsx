/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
	};

	const handleCheckout = () => {
		navigate('/cart');
	};

	return (
		<div className="container w-full p-4 mx-auto md:max-w-4xl">
			<div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg md:flex-row md:items-start md:space-x-6">
				<div className="w-full md:w-1/3">
					<img
						src={images.cover}
						alt={title}
						className="object-cover w-full h-full border-2 rounded-lg shadow-md border-slate-200"
					/>
				</div>
				<div className="flex flex-col items-center justify-center flex-1 w-full text-center md:p-4 md:pr-0 md:text-left md:justify-start md:items-start">
					<h2 className="mb-2 text-2xl font-bold text-pastelViolet sm:text-3xl">{title}</h2>
					<p className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:mx-auto">✨{formatCurrency(price)}✨</p>
					<h3 className="mb-2 text-xl font-bold text-pastelViolet">Lista de Canciones</h3>
					<ul className="mb-4 text-gray-700">
						{tracklist.map((track, index) => (
							<li key={index} className="italic">{`${index + 1}) "${track}"`}</li>
						))}
					</ul>
					<h3 className="mb-2 text-xl font-bold text-pastelViolet">Géneros</h3>
					<ul className="flex flex-wrap justify-center gap-2 mb-4 text-gray-700 md:justify-start">
						{genre.map((genre, index) => (
							<li key={index} className="inline-flex px-4 py-1 text-xs font-bold text-white rounded shadow-sm bg-pastelViolet">
								{genre}
							</li>
						))}
					</ul>
					{quantityAdded > 0 ? (
						<div className="w-full">
							<Link to="/" className="block w-full px-4 py-1 mb-2 text-lg font-bold text-center text-white uppercase transition-colors duration-300 ease-in-out rounded cursor-pointer bg-pastelBlue hover:bg-pastelViolet hover:text-pastelYellow">
								Seguir comprando
							</Link>
							<button
								onClick={handleCheckout}
								className="w-full px-4 py-1 text-lg font-bold text-white uppercase transition-colors duration-300 ease-in-out rounded cursor-pointer bg-pastelGreen hover:bg-pastelViolet hover:text-pastelYellow"
							>
								Terminar mi compra
							</button>
						</div>
					) : (
						<ItemCount stock={stock} initial={1} onAdd={handleAdd} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;