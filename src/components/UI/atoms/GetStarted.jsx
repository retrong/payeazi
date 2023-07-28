import PropTypes from 'prop-types';
import React from 'react';

const GetStarted = ({ styles }) => {
	return (
		<button
			type="button"
			className={`font-poppins font-medium text-[18px] text-black border outline-none ${styles} rounded-[10px] hover:bg-transparent hover:text-white mt-4 button-started`}
		>
			Get Started
		</button>
	);
};


GetStarted.propTypes = {
    styles: PropTypes.string,
};

export default GetStarted;