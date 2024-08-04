import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {

	const containerStyles = {
		background: 'linear-gradient(to bottom left, #C9A0DC, #AEC6CF)',
		color: '#2D3748',
	};

	return (
		<Router>
			<div className="flex flex-col min-h-screen" style={containerStyles}>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/item/:itemId" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
