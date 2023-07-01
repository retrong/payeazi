import PropTypes from 'prop-types';
import React from 'react';
import { rightArrow } from '../../../assets';

const JoinButton = ({styles, children}) => {
  return (
    <button className={`flex uppercase py-4 px-10 text-white border bg-gray-400/40 rounded-md ${styles} hover:bg-transparent`}>
        {children} <img src={rightArrow} alt="arrow" className='w-[17px] h-[17px] ml-5 text-center align-middle mt-1'/>
    </button>
  )
};

JoinButton.propTypes = {
    styles: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default JoinButton