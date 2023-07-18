import React from 'react';
import { apple, bill, driod } from '../../../assets';
import styles, { layout } from '../../style';

const Product = () => (
	<section
		id="product"
		className={`${layout.sectionReverse} relative top-[-200px] max-md:top-[0px] max-sm:mt-2`}
	>
		<div className={`${layout.sectionImgReverse}`}>
			<img src={bill} alt="bill-product" className="w-[100%] h-[100%] z-[5]" />
		</div>

		<div className={`${layout.sectionInfo}`}>
			<h2 className={`${styles.heading2}`}>
				Easily manage <br className="sm:block hidden" /> Your Payment &
				Invoicing
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				With the write payment platform, you can focus on improving your
				business and connecting to more individuals and businesses round the
				world
			</p>

			<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
				<img
					src={driod}
					alt="andriod_store"
					className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
				/>
				<img
					src={apple}
					alt="apple_store"
					className="w-[128px] h-[42px] object-contain cursor-pointer"
				/>
			</div>
		</div>
	</section>
);


export default Product