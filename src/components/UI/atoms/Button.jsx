import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, onClick, disabled }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`py-2 px-4 text-white bg-blue-500 rounded ${
				disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
			}`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default Button;
