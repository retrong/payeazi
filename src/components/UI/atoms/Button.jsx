import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, onClick, disabled, styles }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`py-2 px-4 text-white border text-[15px] font-medium rounded-full ${styles} ${
				disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f9fbdf] hover:text-black'
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
    styles: PropTypes.string,
};

export default Button;
