export const sexes = ['Female', 'Male', 'Other'];

export const months = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];

export const days = {
	'January': 31,
	'February': 28,
	'March': 31,
	'April': 30,
	'May': 31,
	'June': 30,
	'July': 31,
	'August': 31,
	'September': 30,
	'October': 31,
	'November': 30,
	'December': 31,
	'February_LEAP': 29
};

const minYear = 1900;
const years = [];
for(let i = 0; i < new Date().getFullYear() + 1 - minYear; i++) {
	years.push(minYear + i);
}
export { years };
