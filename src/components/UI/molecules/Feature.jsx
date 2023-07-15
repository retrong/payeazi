import PropTypes from 'prop-types';
import { features } from '../../../constants';
import styles, { layout } from '../../style';
import GetStarted from '../atoms/GetStarted';

const FeatureCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "bg-6" : "mb-0"} ${styles.flexCenter} ${styles.paddingX} mb-5`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#458071] mr-2`}>
            <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
        </div>
        <div className='flex flex-1 flex-col ml-3'>
            <h4 className='font-cabin font-semibold text-white text-[24px] leading-[28px] mb-1'>
                {title}
            </h4>
            <p className='font-cabin font-normal text-dimWhite text-[18px] leading-[20px]'>
                {content}
            </p>
        </div>
    </div>
)

const Business = () => {
    return (
		<section id="features" className={`${layout.section} relative top-[-200px] max-md:top-[0px] max-sm:mt-4`}>
			<div className={`flex-1 flex-col ${styles.flexStart}`}>
				<h2 className={`${styles.heading2}`}>
					You do the business, <br className='sm:block hidden'/> we guarantee and offer a reliable payment system
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5 mb-4`}>
					With the write payment platform, you can focus on improving your
					business and connecting to more individuals and businesses round the
					world
				</p>

                <GetStarted className='py-4 mt-8'> Get Started </GetStarted>
			</div>

			<div className={`${layout.sectionImg} flex-col`}>
				{features.map((feature, index) => (
					<FeatureCard key={feature.id} {...feature} index={index} />
				))}
			</div>
		</section>
	);
};

FeatureCard.propTypes = {
    icon: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	index: PropTypes.number.isRequired,
};

export default Business
