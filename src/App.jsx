import React from 'react';
import styles from './App.scss';
import Select from 'react-select';
import Calendar from './Calendar';
import Button from './Button';
import Timer from './Timer';
import { YEARS, MONTHS } from './helpers';

export default function App() {
	const [year, setYear] = React.useState(YEARS[0]);
	const [month, setMonth] = React.useState(MONTHS[0]);
	const [day, setDay] = React.useState('1');
	const [showTimer, setShowTimer] = React.useState(false);

	const resetDay = React.useCallback(
		setStateCallback => {
			return value => {
				setDay('1');
				setStateCallback(value);
			};
		},
		[setDay]
	);

	return (
		<div className={styles.app}>
			{!showTimer ? (
				<React.Fragment>
					<h1>Death Day Calculator</h1>
					<h2>Enter Birthday</h2>
					<div className={styles.dateSelects}>
						<Select
							options={YEARS}
							value={year}
							onChange={resetDay(setYear)}
							getOptionLabel={option => option.value}
						/>
						<Select
							options={MONTHS}
							value={month}
							onChange={resetDay(setMonth)}
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
				</React.Fragment>
			) : (
				<Timer date={new Date(`${month.value} ${day} ${year.value}`)} />
			)}
			<div className={styles.buttonControl}>
				<Button onClick={() => setShowTimer(!showTimer)}>
					{!showTimer ? 'Calculate Death Day' : 'Reset'}
				</Button>
			</div>
		</div>
	);
}
