import React from 'react';
import { creditCard } from '../../../assets';
import styles from '../../style';
import JoinButton from '../atoms/joinButton';

const Hero = () => (
	<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
		<div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mx-16`}
		>
			<p className="text-gray-600 font-semibold leading-8 mb-3">
				FAST & SEEMLESS TRANSACTIONS
			</p>
			<h1 className="flex-1 font-cabin font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[85px] leading-[75px]">
				BANKING <br />
				YOU WANT <br /> TO USE
			</h1>
			<JoinButton>join 5.5m payeazi clients</JoinButton>
		</div>

        <div className='w-[200px] h-[200px]'>
            <img src={creditCard} alt="" />
        </div>
	</section>
);

export default Hero