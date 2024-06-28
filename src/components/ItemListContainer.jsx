

const ItemListContainer = ({ greeting }) => {

	const containerStyles = {
		background: 'linear-gradient(to bottom left, #C9A0DC, #AEC6CF)',
		color: '#2D3748',
	};

	return (
		<div
			className="flex items-center justify-center flex-grow p-4 text-center"
			style={containerStyles}
		>
			<h2 className="text-xl text-center">{greeting}</h2>
		</div>
	)
}

export default ItemListContainer