/* eslint-disable react/prop-types */
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, buttonText = "Agregar" }) => {
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
		<div className="flex flex-col items-center w-full p-4 space-y-3 rounded shadow-lg bg-pastelBlue md:flex-row md:space-y-0 md:grow md:gap-4">
			<div className="flex items-center space-x-3">
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
			</div>
			<button
				onClick={handleAdd}
				className={`px-4 py-1.5 text-white rounded uppercase font-semibold text-sm transition-all duration-300 ease-in-out shadow-sm ${isAddDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-pastelGreen hover:bg-pastelViolet hover:text-pastelYellow'}`}
				disabled={isAddDisabled}
			>
				{buttonText}
			</button>
			<span className="ml-2 text-xs italic text-slate-600 md:ml-auto">(Stock: {availableStock})</span>
		</div>
	);
};

export default ItemCount;