/* eslint-disable react/prop-types */
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const { categoryId } = useParams();

	useEffect(() => {
		setLoading(true);
		const db = getFirestore();
		const itemsCollection = collection(db, 'items');
		let q;

		if (categoryId) {
			q = query(itemsCollection, where('categoryId', '==', categoryId));
		} else {
			q = itemsCollection;
		}

		getDocs(q).then((snapshot) => {
			const fetchedItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter(item => item.stock > 0);
			setItems(fetchedItems);
			setLoading(false);
		});
	}, [categoryId]);

	return (
		<div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
			{loading ? (
				<Loader />
			) : (
				<div className='container mx-auto'>
					<h2 className="mb-4 text-3xl font-black text-center text-white">Catálogo{categoryId ? ` - ${categoryId}` : ''}</h2>
					<ItemList items={items} />
					{items.length === 0 && (
						<p className="text-xl text-center text-gray-700">Actualmente no tenemos nada para ofrecer, pero estamos trabajando en ello 👷🏻‍♂️🚧</p>
					)}
				</div>
			)}
		</div>
	);
};

export default ItemListContainer;