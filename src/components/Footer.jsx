import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="text-white shadow-lg bg-pastelViolet bg-opacity-80 backdrop-blur-md backdrop-filter">
			<div className="container flex flex-col items-center justify-between p-4 mx-auto space-y-4 md:flex-row md:space-y-0">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-3xl italic font-black text-center uppercase">
						<Link to="/">
							City <span className="text-pastelYellow">Pop</span> Store
						</Link>
					</h1>
				</div>
				<div className="flex flex-col items-center">
					<nav>
						<ul className="flex flex-wrap justify-center gap-4">
							<li className="text-sm font-semibold uppercase transition-colors cursor-pointer hover:text-pastelYellow">
								<Link to="/category/70s">70s</Link>
							</li>
							<li className="text-sm font-semibold uppercase transition-colors cursor-pointer hover:text-pastelYellow">
								<Link to="/category/80s">80s</Link>
							</li>
							<li className="text-sm font-semibold uppercase transition-colors cursor-pointer hover:text-pastelYellow">
								<Link to="/category/90s">90s</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="px-4 pb-4 mt-4 text-sm text-center md:p-0">
				<p>© {new Date().getFullYear()} City Pop Store. Todos los derechos reservados.</p>
			</div>
		</footer>
	);
};

export default Footer;