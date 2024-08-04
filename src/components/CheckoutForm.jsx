/* eslint-disable react/prop-types */
import { useState } from 'react';

const CheckoutForm = ({ onSubmit, loading }) => {
	const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === 'phone') {
			const phoneValue = value.replace(/[^0-9]/g, ''); // Permitir solo números
			setBuyer({ ...buyer, [name]: phoneValue });
		} else {
			setBuyer({ ...buyer, [name]: value });
		}
		validateField(name, value);
	};

	const validateField = (name, value) => {
		let errorMsg = '';

		if (name === 'name' && !value.trim()) {
			errorMsg = 'Nombre es requerido';
		} else if (name === 'phone') {
			if (!value.trim()) {
				errorMsg = 'Teléfono es requerido';
			} else if (!/^\d+$/.test(value)) {
				errorMsg = 'Teléfono no es válido';
			}
		} else if (name === 'email') {
			if (!value.trim()) {
				errorMsg = 'Email es requerido';
			} else if (!/\S+@\S+\.\S+/.test(value)) {
				errorMsg = 'Email no es válido';
			}
		}

		setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
	};

	const validate = () => {
		const newErrors = {};

		if (!buyer.name.trim()) newErrors.name = 'Nombre es requerido';
		if (!buyer.phone.trim()) {
			newErrors.phone = 'Teléfono es requerido';
		} else if (!/^\d+$/.test(buyer.phone)) {
			newErrors.phone = 'Teléfono no es válido';
		}
		if (!buyer.email.trim()) {
			newErrors.email = 'Email es requerido';
		} else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
			newErrors.email = 'Email no es válido';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			onSubmit(buyer);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full p-4 space-y-4 bg-white rounded shadow-md">
			<div>
				<label className="block text-sm font-medium text-left text-gray-700">Nombre:</label>
				<input
					type="text"
					name="name"
					value={buyer.name}
					onChange={handleInputChange}
					className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-pastelBlue"
					placeholder='Ingresá tu nombre completo'
				/>
				{errors.name && <p className="text-sm text-left text-red-500">{errors.name}</p>}
			</div>
			<div>
				<label className="block text-sm font-medium text-left text-gray-700">Teléfono:</label>
				<input
					type="tel"
					name="phone"
					value={buyer.phone}
					onChange={handleInputChange}
					className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-pastelBlue"
					placeholder='Ingresá tu número de teléfono (solo números)'
				/>
				{errors.phone && <p className="text-sm text-left text-red-500">{errors.phone}</p>}
			</div>
			<div>
				<label className="block text-sm font-medium text-left text-gray-700">Email:</label>
				<input
					type="email"
					name="email"
					value={buyer.email}
					onChange={handleInputChange}
					className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-pastelBlue"
					placeholder='Ingresá tu email'
				/>
				{errors.email && <p className="text-sm text-left text-red-500">{errors.email}</p>}
			</div>
			<button
				type="submit"
				className="w-full px-4 py-2 text-lg font-semibold text-white uppercase transition-colors duration-300 ease-out rounded shadow-md cursor-pointer bg-pastelGreen hover:bg-pastelViolet hover:text-pastelYellow"
				disabled={loading}
			>
				{loading ? 'Procesando...' : 'Finalizar Compra'}
			</button>
		</form>
	);
};

export default CheckoutForm;
