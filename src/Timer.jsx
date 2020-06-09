import React from 'react';
import PropTypes from 'prop-types';
import { getTimeLeft } from './helpers';
import styles from './App.scss';

export default function Timer({ date }) {
	const [timeLeft, setTimeLeft] = React.useState(getTimeLeft(date));

	React.useEffect(() => {
		const i = setInterval(() => {
			setTimeLeft(getTimeLeft(date));
		}, 1000);
		return () => clearInterval(i);
	}, [date, setTimeLeft]);

	return (
		<div className={styles.timer}>
			{timeLeft < 0 && (
				<h2>
					{
						'Congrats! You made it past the predicted death day. Treasure every extra moment'
					}
				</h2>
			)}
			<h1>{timeLeft}</h1>
		</div>
	);
}

Timer.propTypes = {
	date: PropTypes.object.isRequired
};
