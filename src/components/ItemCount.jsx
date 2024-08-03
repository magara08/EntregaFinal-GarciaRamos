/* eslint-disable react/prop-types */
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);
	const [availableStock, setAvailableStock] = useState(stock);

	const handleIncrement = () => {
		if (count < availableStock) {
			setCount(count + 1);
		}
	};

	const handleDecrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const handleAdd = () => {
		if (availableStock > 0 && count <= availableStock) {
			onAdd(count);
			setAvailableStock(availableStock - count);
			setCount(initial);
		}
	};

	const isAddDisabled = availableStock === 0;
	const decrementDisabled = count <= 1;
	const incrementDisabled = count >= availableStock;

	return (
		<div className="flex items-center p-4 space-x-2 rounded shadow-lg bg-pastelBlue">
			<button
				onClick={handleDecrement}
				className={`px-3 py-1 text-white rounded ${decrementDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-pastelViolet'}`}
				disabled={decrementDisabled}
			>
				-
			</button>
			<span className="text-lg text-slate-900">{count}</span>
			<button
				onClick={handleIncrement}
				className={`px-3 py-1 text-white rounded ${incrementDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-pastelViolet'}`}
				disabled={incrementDisabled}
			>
				+
			</button>
			<button
				onClick={handleAdd}
				className={`px-4 py-1 text-white rounded ${isAddDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-pastelGreen'}`}
				disabled={isAddDisabled}
			>
				Agregar al Carrito
			</button>
			<span className="text-sm italic text-slate-600">(Stock: {availableStock})</span>
		</div>
	);
};

export default ItemCount;