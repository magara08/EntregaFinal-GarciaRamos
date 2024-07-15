/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../db/products';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

const getProductById = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const product = products.find(p => p.id === +id);
			resolve(product);
		}, 2000);
	});
};

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);
	const { itemId } = useParams();

	useEffect(() => {
		getProductById(itemId).then((product) => {
			setProduct(product);
		});
	}, [itemId]);

	const containerStyles = {
		background: 'linear-gradient(to bottom left, #C9A0DC, #AEC6CF)',
		color: '#2D3748',
	};

	return (
		<div className="flex flex-col items-center justify-center flex-grow p-4 text-center" style={containerStyles}>
			{product ? <ItemDetail product={product} /> : <Loader />}
		</div>
	);
};

export default ItemDetailContainer;