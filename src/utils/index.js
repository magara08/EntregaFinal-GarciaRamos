export const formatCurrency = (value, currency = 'USD') => {
	return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, currencyDisplay: 'narrowSymbol' }).format(value);
};

