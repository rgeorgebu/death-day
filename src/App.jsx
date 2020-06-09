import React from 'react';
import styles from './App.scss';
import Select from 'react-select';
import Calendar from './Calendar';
import Button from './Button';
import { YEARS, MONTHS } from './helpers';

export default function App() {
	const [year, setYear] = React.useState(YEARS[0]);
	const [month, setMonth] = React.useState(MONTHS[0]);
	const [day, setDay] = React.useState('1');

	return (
		<div className={styles.app}>
			<h1>Death Day Calculator</h1>
			<h2>Enter Birthday</h2>
			<div className={styles.dateSelects}>
				<Select
					options={YEARS}
					value={year}
					onChange={setYear}
					getOptionLabel={option => option.value}
				/>
				<Select
					options={MONTHS}
					value={month}
					onChange={setMonth}
					getOptionLabel={option => option.value}
				/>
			</div>
			<div className={styles.calendarControl}>
				<Calendar
					year={year.value}
					month={month.value}
					day={day}
					setDay={setDay}
				/>
			</div>
			<div className={styles.buttonControl}>
				<Button onClick={() => alert('yo')}>Calculate Death Day</Button>
			</div>
		</div>
	);
}
