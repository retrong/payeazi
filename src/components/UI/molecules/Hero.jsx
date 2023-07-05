import React from 'react';
import { creditCard } from '../../../assets';
import styles from '../../style';
import JoinButton from '../atoms/JoinButton';

const Hero = () => (
	<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
		<div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}
		>
            <div className={`flex flex-col items-start `}>
                <p className="text-gray-400 font-semibold leading-8 mb-3">
                    FAST & SEEMLESS TRANSACTIONS
                </p>
                <h1 className="flex-1 font-cabin font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[85px] leading-[75px] tracking-wide uppercase">
                    Banking <br />
                    You Want <br /> To Use
                </h1>
            </div>

            <div className='mt-20'>
                <JoinButton />
            </div>
		</div>

		<div className={`flex-1 flex ${styles.flexLStart} md:my-0 my-10 xl:px-0 sm:px-16 relative`}>
			<img src={creditCard} alt="creditCard" className="w-full h-[500px] object-contain relative z-[5] items-start"/>
		</div>
	</section>
);

export default Hero