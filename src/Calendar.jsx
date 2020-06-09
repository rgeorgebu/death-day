import React from 'react';
import styles from './App.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { incrementDate, isNullRow } from './helpers';

export default function Calendar({ year, month, day, setDay }) {
	// Initialize null calendar array
	let calendar = [...new Array(6)].map(() =>
		[...new Array(7)].map(() => null)
	);

	// Initialize loop variables
	let date = new Date(`${month} 1 ${year}`);
	const currentMonth = date.getMonth();
	let week = 0;

	// Increment date until past month - this is done
	// so all edge cases are managed by the browsers date object
	while (date.getMonth() === currentMonth) {
		const weekDay = date.getDay();
		calendar[week][weekDay] = String(date.getDate());
		// Increment week when at last weekday
		if (weekDay === 6) {
			week++;
		}
		date = incrementDate(date);
	}

	// Remove unused weeks for certain year and month combos
	calendar = calendar.filter(week => !isNullRow(week));

	return (
		<div className={styles.calendar}>
			{calendar.map((week, i) => (
				<div className={styles.week} key={i}>
					{week.map((date, j) => (
						<div
							className={cx(
								styles.day,
								date === day && styles.selected,
								!date && styles.disabled
							)}
							key={`${i}-${j}`}
							onClick={() => setDay(date)}
						>
							{date}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

Calendar.propTypes = {
	year: PropTypes.string.isRequired,
	month: PropTypes.string.isRequired,
	day: PropTypes.string.isRequired,
	setDay: PropTypes.func.isRequired
};
