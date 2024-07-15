/* eslint-disable react/prop-types */
import Item from './Item';

const ItemList = ({ items }) => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{items.map(item => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
};

export default ItemList;