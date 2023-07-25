import React from 'react';
import { feedback } from '../../../constants';
import styles from '../../style';
import FeedbackCard from '../atoms/FeedbackCard';

const Testimonies = () => (
	<section
		id="clients"
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative top-[-200px] max-md:top-[0px] max-sm:mt-2`}
	>
		<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative">
			<h1 className={`${styles.heading2}`}>
				What people are <br className="sm:block hidden" /> saying about us
			</h1>
			<div className="w-full md:mt-0 mt-16">
				<p className={`${styles.paragraph} max-w-[450px]`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea quis
					dolorum ut iure, porro esse.
				</p>
			</div>
		</div>
		<div>
			{feedback.map((card) => (
				<FeedbackCard key={card.id} {...card} />
			))}
		</div>
	</section>
);


export default Testimonies