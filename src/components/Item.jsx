/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";

const Item = ({ id, title, price, images }) => {
	return (
		<div className="flex flex-col gap-4 p-4 bg-white border rounded shadow-lg">
			<img src={images.cover} alt={title} className="object-cover w-full h-auto rounded shadow-md" />
			<h3 className="text-xl font-bold text-pastelViolet">{title}</h3>
			<p className="mt-auto text-2xl font-semibold text-gray-900">✨US{formatCurrency(price)}✨</p>
			<Link to={`/item/${id}`} className="inline-block px-4 py-2 text-white transition-none transition-colors duration-300 rounded bg-pastelBlue hover:bg-pastelViolet hover:text-pastelYellow">
				Ver producto
			</Link>
		</div>
	);
};

export default Item;