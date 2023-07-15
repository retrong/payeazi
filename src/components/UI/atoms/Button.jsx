import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, onClick, styles }) => {
	return (
		<button
			onClick={onClick}
			className={`py-2 px-4 text-white border text-[15px] font-medium rounded-full outline-none ${styles} hover:bg-[#f9fbdf] hover:text-black `}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    styles: PropTypes.string,
};

export default Button;
