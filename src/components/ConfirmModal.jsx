/* eslint-disable react/prop-types */
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '2rem',
		borderRadius: '8px',
		backgroundColor: '#ffffff',
		boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
};

Modal.setAppElement('#root');

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm, message }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={customStyles}
			contentLabel="Confirm Modal"
		>
			<div className="text-center">
				<h2 className="mb-4 text-2xl font-bold text-gray-800">Confirmación</h2>
				<p className="mb-8 text-gray-700">{message}</p>
				<div className="flex justify-center space-x-4">
					<button
						onClick={onConfirm}
						className="px-4 py-2 font-semibold text-white uppercase transition-colors duration-300 ease-in-out rounded cursor-pointer bg-pastelGreen hover:bg-pastelViolet hover:text-pastelYellow"
					>
						Confirmar
					</button>
					<button
						onClick={onRequestClose}
						className="px-4 py-2 font-semibold text-white uppercase transition-colors duration-300 ease-in-out rounded cursor-pointer bg-pastelBlue hover:bg-pastelViolet hover:text-pastelYellow"
					>
						Cancelar
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ConfirmModal;