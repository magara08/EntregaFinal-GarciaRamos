/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";

const Item = ({ id, title, price, pictureUrl }) => {
	return (
		<div className="p-4 bg-white border rounded shadow-lg">
			<img src={pictureUrl} alt={title} className="object-cover w-[300px] h-[300px] mb-4 rounded" />
			<h3 className="mb-2 text-xl font-bold text-pastelViolet">{title}</h3>
			<p className="font-semibold text-gray-900">{formatCurrency(price)}</p>
			<Link to={`/item/${id}`} className="inline-block px-4 py-2 mt-4 text-white transition-none transition-colors duration-300 rounded bg-pastelBlue hover:bg-pastelViolet hover:text-pastelYellow">
				Ver producto
			</Link>

		</div>
	);
};

export default Item;