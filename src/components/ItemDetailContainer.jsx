/* eslint-disable react/prop-types */
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const { itemId } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const itemDoc = doc(db, 'items', itemId);

		getDoc(itemDoc).then((snapshot) => {
			if (snapshot.exists()) {
				setProduct({ id: snapshot.id, ...snapshot.data() });
			}
			setLoading(false);
		});
	}, [itemId]);

	return (
		<div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
			{loading ? (
				<Loader />
			) : (
				product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>
			)}
		</div>
	);
};

export default ItemDetailContainer;
