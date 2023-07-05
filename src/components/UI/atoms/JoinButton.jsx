import PropTypes from 'prop-types';
import React from 'react';
import { rightArrow } from '../../../assets';

const JoinButton = ({styles}) => {
  return (
    <button className=
    {`flex uppercase w-[380px] justify-center py-4 px-10 text-white border bg-gray-500/20 rounded-md ${styles} hover:bg-transparent relative z-[1000]`}>
        join 5.5m payeazi clients 
        <img src={rightArrow} alt="arrow" className='w-[17px] h-[17px] ml-5 text-center align-middle mt-1'/>
    </button>
  )
};

JoinButton.propTypes = {
    styles: PropTypes.string,
};

export default JoinButton