export const formatCurrency = (value, currency = 'ARS') => {
	return new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency
	}).format(value);
};