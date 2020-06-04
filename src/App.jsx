import React from 'react';
import styles from './App.scss';
import Select from 'react-select';
import { sexes, months, days, years } from './constants';
import { getDaysFromYearAndMonth } from './helpers';

export default function App() {
	const [sex, setSex] = React.useState(null);
	const [year, setYear] = React.useState(null);
	const [month, setMonth] = React.useState(null);
	const [day, setDay] = React.useState(null);

	return (
		<div className={styles.app}>
			<h1>Welcome</h1>
			<p>Please select your sex:</p>
			<Select
				options={sexes.map(e => ({ value: e }))}
				value={sex}
				getOptionLabel={option => option.value}
				onChange={setSex}
				placeholder="Male"
			/>
			<p>Please select your date of birth:</p>
			<div className={styles.dateSelects}>
				<Select
					options={years.map(e => ({ value: e }))}
					value={year}
					getOptionLabel={option => option.value}
					onChange={setYear}
					placeholder="1912"
					className={styles.select}
				/>
				<Select
					options={months.map(e => ({ value: e }))}
					value={month}
					getOptionLabel={option => option.value}
					onChange={setMonth}
					placeholder="June"
					className={styles.select}
				/>
				<Select
					options={(year && month ? Array.from(new Array(getDaysFromYearAndMonth(year.value, month.value, days)).keys()).map(e => Number(e) + 1): ['Please chose a year and month']).map(e => ({ value: e }))}
					value={day}
					getOptionLabel={option => option.value}
					onChange={setDay}
					placeholder="23"
					className={styles.select}
				/>
			</div>
			<button className={styles.button}>Compute My Ending</button>
		</div>
	);
}
