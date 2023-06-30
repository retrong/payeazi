import React from 'react';
import Hero from '../UI/molecules/Hero';
import Navbar from '../UI/molecules/Navbar';
import styles from '../style';

const landingPage = () => (
	<section className="bg-primary w-full overflow-hidden h-15 shadow">
		<div className={`${styles.paddingX} ${styles.flexCenter} mx-5 sm:mx-0`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>
		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>
	</section>
);


export default landingPage;
