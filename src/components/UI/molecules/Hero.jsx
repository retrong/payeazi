import React from 'react';
import { creditCard } from '../../../assets';
import styles from '../../style';
// import JoinButton from '../atoms/joinButton';

const Hero = () => (
	<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
		<div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}
		>
			<p className="text-gray-400 font-semibold leading-8 mb-3">
				FAST & SEEMLESS TRANSACTIONS
			</p>
			<h1 className="flex-1 font-cabin font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[85px] leading-[75px]">
				BANKING <br />
				YOU WANT <br /> TO USE
			</h1>

            {/* <div className=' mt-20'>
                <JoinButton />
            </div> */}
		</div>

		<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative mt-10`}>
			<img src={creditCard} alt="creditCard" className="w-full h-[550px] object-contain absolute z-[5] right-10"/>
		</div>
	</section>
);

export default Hero