import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
	return (
		<nav className="sticky top-0 grid items-center h-16 grid-cols-3 gap-4 p-4 shadow-lg bg-pastelViolet bg-opacity-80 backdrop-blur-md backdrop-filter">
			<ul className="flex items-center justify-start gap-4">
				<li className="text-sm font-semibold text-white uppercase transition-colors cursor-pointer hover:text-pastelYellow">
					<Link to="/category/70s">70s</Link>
				</li>
				<li className="text-sm font-semibold text-white uppercase transition-colors cursor-pointer hover:text-pastelYellow">
					<Link to="/category/80s">80s</Link>
				</li>
				<li className="text-sm font-semibold text-white uppercase transition-colors cursor-pointer hover:text-pastelYellow">
					<Link to="/category/90s">90s</Link>
				</li>
			</ul>
			<h1 className='text-3xl font-black text-center text-white uppercase justify-self-center'>
				<Link to="/">
					City Pop Store
				</Link>
			</h1>
			<div className="justify-self-end">
				<CartWidget />
			</div>
		</nav>
	)
}

export default NavBar