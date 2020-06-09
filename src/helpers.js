const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = 1900;
export const YEARS = [...new Array(MAX_YEAR - MIN_YEAR + 1)].map((_, i) => ({
	value: String(MIN_YEAR + i)
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

const MILLS_PER_DAY = 24 * 60 * 60 * 1000;

export function incrementDate(oldDate) {
	return new Date(oldDate.getTime() + MILLS_PER_DAY);
}

export function isNullRow(row) {
	return !row.reduce((agg, ele) => ele || agg, false);
}

// https://www.worldometers.info/demographics/life-expectancy/
const LIFE_EXPECTANCY_YEARS = 73.2;
const LIFE_EXPECTANCY_MILLIS =
	LIFE_EXPECTANCY_YEARS * 365 * 24 * 60 * 60 * 1000;

export function getTimeLeft(birthDate) {
	return Math.floor(
		(LIFE_EXPECTANCY_MILLIS - (Date.now() - birthDate.getTime())) / 1000
	);
}
