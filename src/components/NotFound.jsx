import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="mb-4 text-6xl font-black text-pastelViolet">404</h1>
			<p className="mb-4 text-2xl text-gray-700">Página no encontrada</p>
			<Link to="/" className="px-4 py-2 mt-4 text-white rounded bg-pastelGreen hover:bg-pastelViolet">
				Volver a la Home
			</Link>
		</div>
	);
};

export default NotFound;
