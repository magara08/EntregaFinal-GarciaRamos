import { addDoc, collection, doc, getFirestore, Timestamp, writeBatch } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import ConfirmModal from './ConfirmModal';

const Cart = () => {
	const { cart, removeItem, clear, totalPrice } = useCart();
	const [orderId, setOrderId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalAction, setModalAction] = useState(null);
	const [itemToRemove, setItemToRemove] = useState(null);

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

	const openModal = (action, item = null) => {
		setModalAction(action);
		setItemToRemove(item);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleConfirm = () => {
		if (modalAction === 'clear') {
			clear();
		} else if (modalAction === 'remove' && itemToRemove) {
			removeItem(itemToRemove.id);
		}
		closeModal();
	};

	if (orderId) {
		return (
			<div className="flex items-center justify-center flex-grow p-4">
				<div className="w-full max-w-2xl p-6 mx-auto space-y-4 text-center bg-white rounded-lg shadow-lg">
					<h2 className="text-3xl font-black text-center text-pastelViolet">Orden Completada</h2>
					<p className="text-lg text-gray-700">
						Gracias por tu compra. Tu número de orden es: <strong>{orderId}</strong>
					</p>
					<Link
						to="/"
						className="inline-block px-4 py-2 font-semibold text-white uppercase transition-all duration-300 ease-in-out rounded cursor-pointer bg-pastelGreen hover:bg-pastelViolet hover:text-pastelYellow"
					>
						Volver a la tienda
					</Link>
				</div>
			</div>
		);
	}

	if (cart.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
				<h2 className="mb-4 text-3xl font-black text-center text-white">Carrito</h2>
				<p className="text-lg text-gray-700">Tu carrito está vacío, por ahora... 😉</p>
				<Link to="/" className="px-4 py-2 mt-4 font-semibold text-white uppercase transition-all duration-300 ease-in-out rounded cursor-pointer bg-pastelGreen hover:bg-pastelViolet hover:text-pastelYellow">
					Volver a la tienda
				</Link>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
			<h2 className="mb-4 text-3xl font-black text-center text-white">Terminar tu Compra</h2>
			<div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2">
				<div>
					<CheckoutForm onSubmit={handleOrder} loading={loading} />
				</div>
				<div>
					<ul className="space-y-4">
						{cart.map(item => (
							<CartItem key={item.id} item={item} openModal={openModal} />
						))}
					</ul>
					<div className="mt-4 text-lg font-bold text-gray-900">
						Total: {formatCurrency(totalPrice)}
					</div>
					<button
						onClick={() => openModal('clear')}
						className="px-4 py-2 mt-4 font-semibold text-white uppercase transition-all duration-300 ease-in-out rounded cursor-pointer bg-pastelBlue hover:bg-pastelYellow hover:text-pastelViolet"
					>
						Vaciar Carrito
					</button>
				</div>
			</div>
			<ConfirmModal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				onConfirm={handleConfirm}
				message={modalAction === 'clear' ? '¿Estás seguro de que quieres vaciar el carrito?' : '¿Estás seguro de que quieres eliminar este producto?'}
			/>
		</div>
	);
};

export default Cart;