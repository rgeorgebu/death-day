const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = 1900;
export const YEARS = [...new Array(MAX_YEAR - MIN_YEAR + 1)].map((_, i) => ({
	value: MIN_YEAR + i
}));

export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
].map(month => ({ value: month }));
