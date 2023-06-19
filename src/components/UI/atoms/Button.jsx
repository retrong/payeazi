import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, onClick, disabled }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`py-1 px-4 text-white bg-orange-500 ${
				disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-400'
			}`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Button;
