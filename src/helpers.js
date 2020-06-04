export function getDaysFromYearAndMonth(year, month, days) {
	let numberOfDays = days[month];
	if (Number(year) % 4 === 0 && month === 'February' && year != '1900') {
		numberOfDays = days['February_LEAP'];
	}
	return numberOfDays;
}
