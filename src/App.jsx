import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			<NavBar />
			<ItemListContainer greeting="¡Bienvenido a City Pop Store! Sitio en construcción..." />
		</div>
	)
}

export default App
