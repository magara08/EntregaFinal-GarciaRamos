/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../db/products';
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const { categoryId } = useParams();

	useEffect(() => {
		const fetchProducts = () => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(products);
				}, 2000);
			});
		};

		setLoading(true);

		fetchProducts().then(products => {

			if (categoryId) {
				setItems(products.filter(p => p.category === categoryId));
			} else {
				setItems(products);
			}
			setLoading(false);
		});
	}, [categoryId]);

	const containerStyles = {
		background: 'linear-gradient(to bottom left, #C9A0DC, #AEC6CF)',
		color: '#2D3748',
	};

	return (
		<div className="flex flex-col items-center justify-center flex-grow p-4 text-center" style={containerStyles}>
			{loading ? (
				<Loader />
			) : (
				<>
					<h2 className="mb-4 text-3xl font-black text-center text-white">Catálogo{categoryId ? ` - ${categoryId}` : ''}</h2>
					<ItemList items={items} />
				</>
			)}
		</div>
	);
};

export default ItemListContainer;