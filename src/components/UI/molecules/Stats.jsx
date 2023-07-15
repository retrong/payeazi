import { stats } from '../../../constants';
import styles from '../../style';

const Stats = () => (
	<section
		className={`${styles.flexCenter} flex-row flex-wrap bg-white rounded-3xl w-full h-auto relative top-[-400px] max-md:top-[0px] py-4`}
	>
		{stats.map((stat) => (
			<div key={stat.id} className={`flex flex-1 justify-center items-center flex-row m-3 max-xs:justify-start`}>
				<h4 className='font-cabin font-semibold xs:text-[40px] text-[35px] xs:leading-[53px] leading-[43px] text-black'>{stat.value}</h4>
				<p className='font-cabin font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase text-gradient ml-3'>{stat.title}</p>
			</div>
		))}
	</section>
);


export default Stats