import { addDoc, collection, doc, getFirestore, Timestamp, writeBatch } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
	const { cart, removeItem, clear } = useCart();
	const [orderId, setOrderId] = useState(null);
	const [loading, setLoading] = useState(false);

	const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

	const handleOrder = async (buyer) => {
		setLoading(true);

		const order = {
			buyer,
			items: cart.map(item => ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity })),
			date: Timestamp.fromDate(new Date()),
			total: totalPrice
		};

		const db = getFirestore();
		const batch = writeBatch(db);

		try {
			// Crear la orden
			const ordersCollection = collection(db, 'orders');
			const docRef = await addDoc(ordersCollection, order);
			setOrderId(docRef.id);

			// Actualizar el stock
			cart.forEach((item) => {
				const itemRef = doc(db, 'items', item.id);
				batch.update(itemRef, { stock: item.stock - item.quantity });
			});

			await batch.commit();

			clear();
		} catch (error) {
			console.error("Error al crear la orden: ", error);
		} finally {
			setLoading(false);
		}
	};

	if (orderId) {
		return (
			<div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
				<h2 className="mb-4 text-3xl font-black text-center text-white">Orden Completa</h2>
				<p className="text-lg text-gray-700">Gracias por tu compra. Tu número de orden es: <strong>{orderId}</strong></p>
				<Link to="/" className="px-4 py-2 mt-4 text-white bg-blue-600 rounded">
					Volver a la tienda
				</Link>
			</div>
		);
	}

	if (cart.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
				<h2 className="mb-4 text-3xl font-black text-center text-white">Carrito</h2>
				<p className="text-lg text-gray-700">Tu carrito está vacío por ahora.</p>
				<Link to="/" className="px-4 py-2 mt-4 text-white bg-blue-600 rounded">
					Volver a la tienda
				</Link>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
			<h2 className="mb-4 text-3xl font-black text-center text-white">Carrito</h2>
			<ul className="w-full max-w-md space-y-4">
				{cart.map(item => (
					<li key={item.id} className="flex items-center justify-between p-4 bg-white rounded shadow-lg">
						<div className="flex items-center space-x-4">
							<img src={item.pictureUrl} alt={item.title} className="w-16 h-16 rounded" />
							<div>
								<h3 className="text-lg font-semibold">{item.title}</h3>
								<p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
								<p className="text-sm text-gray-600">Precio: {formatCurrency(item.price)}</p>
							</div>
						</div>
						<button
							onClick={() => removeItem(item.id)}
							className="px-4 py-2 text-white bg-red-600 rounded"
						>
							Eliminar
						</button>
					</li>
				))}
			</ul>
			<div className="mt-4 text-lg font-bold text-gray-900">
				Total: {formatCurrency(totalPrice)}
			</div>
			<button
				onClick={clear}
				className="px-4 py-2 mt-4 text-white bg-gray-600 rounded"
			>
				Vaciar Carrito
			</button>

			<CheckoutForm onSubmit={handleOrder} loading={loading} />
		</div>
	);
};

export default Cart;
