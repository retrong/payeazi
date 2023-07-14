import React from 'react';
import { orange } from '../../assets';
// import JoinButton from '../UI/atoms/JoinButton';
import Feature from '../UI/molecules/Feature';
import Hero from '../UI/molecules/Hero';
import Navbar from '../UI/molecules/Navbar';
import Stats from '../UI/molecules/Stats';
import styles from '../style';

const landingPage = () => (
	<section className="bg_gradient w-full overflow-hidden h-15 shadow">
		<div className={`${styles.paddingX} ${styles.flexCenter} mx-5 sm:mx-0`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>
		<div className={`${styles.flexStart} ${styles.marginX}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		{/* <div className={`${styles.paddingX}`}>
			<JoinButton />
		</div> */}

        <div className='z-[-5]'>
            <img src={orange} alt="orange" className="w-[50%] h-[20%] max-md:hidden relative bottom-28 right-44" />
        </div>

		<div className={`${styles.flexStart} ${styles.paddingX}`}>
			<div className={`${styles.boxWidth}`}>
                <Stats />
				<Feature />
			</div>
		</div>
	</section>
);


export default landingPage;
