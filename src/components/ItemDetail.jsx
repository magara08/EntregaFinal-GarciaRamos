/* eslint-disable react/prop-types */
import { formatCurrency } from '../utils';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
	const { id, title, description, price, pictureUrl, stock } = product;

	const handleAdd = (quantity) => {
		console.log(`Agregado ${quantity} ítems de ${title} al carrito`);
	};

	return (
		<div className="flex max-w-4xl p-6 mx-auto space-x-6 bg-white rounded-lg shadow-lg">
			<div className="relative w-[300px] h-[300px] bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
				<img
					src={pictureUrl}
					alt={title}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="flex-1">
				<h2 className="mb-2 text-3xl font-bold text-pastelViolet">{title}</h2>
				<p className="mb-4 text-left text-gray-700">{description}</p>
				<p className="mb-4 text-3xl font-semibold text-gray-900">{formatCurrency(price)}</p>
				<ItemCount stock={stock} initial={1} onAdd={handleAdd} />
			</div>
		</div>
	);
};

export default ItemDetail;