import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

	return (
		<Router>
			<div className="flex flex-col min-h-screen bg-gray-100">
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/item/:itemId" element={<ItemDetailContainer />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
