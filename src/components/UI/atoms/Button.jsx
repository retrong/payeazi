import PropTypes from 'prop-types';
import React from 'react';

Button.PropTypes = {
	children: PropTypes.string,
};

const Button = ({ children }) => {
	return <button className="bg-sky-500 hover:bg-sky-700">{children}</button>;
};

export default Button;
