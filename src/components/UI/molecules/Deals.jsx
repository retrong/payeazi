import React from 'react';
import { worldMap } from '../../../assets';
import styles, { layout } from '../../style';
import GetStarted from '../atoms/GetStarted';

const Deals = () => {
  return (
		<section
			className={`${layout.section} relative top-[-200px] max-md:top-[0px] max-sm:mt-2`}
		>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2}`}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</h2>
				<p className={`${styles.paragraph}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
					quisquam quis? Recusandae, quo enim aspernatur blanditiis dicta
					voluptas quisquam perferendis?
				</p>
				<GetStarted />
			</div>
			<div className={`${layout.sectionImg}`}>
				<img
					src={worldMap}
					alt="worldmap"
					className="w-[100%] h-[100%] z-[5]"
				/>
			</div>
		</section>
	);
}

export default Deals