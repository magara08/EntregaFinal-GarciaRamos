import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
	return (
		<nav className="sticky top-0 shadow-lg bg-pastelViolet bg-opacity-80 backdrop-blur-md backdrop-filter">
			<div className="container flex flex-col items-center justify-between p-4 mx-auto md:flex-row">
				<div className="flex items-center justify-between w-full md:w-auto">
					<h1 className="text-2xl italic font-black text-center text-white uppercase sm:text-3xl">
						<Link to="/">
							City <span className="text-pastelYellow">Pop</span> Store
						</Link>
					</h1>
					<div className="block md:hidden">
						<CartWidget />
					</div>
				</div>
				<div className="static -translate-x-1/2 md:absolute md:transform left-1/2 transform-none">
					<ul className="flex items-center justify-center w-full gap-4 mt-4 md:mt-0 md:w-auto">
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
				</div>
				<div className="hidden md:block">
					<CartWidget />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;