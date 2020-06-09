import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';

export default function Button({ children, onClick }) {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};
