import { features } from '../../../constants';
import styles from '../../style';

const FeatureCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "bg-6" : "mb-0"} ${styles.flexCenter} ${styles.paddingX} mb-5 relative bottom-56`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex px-0 sm:px-14 py-4`}>
            <img src={icon} alt="icon" />
        </div>
        <div className='flex flex-1 flex-col ml-3'>
            <h4>
                {title}
            </h4>
            <p>
                {content}
            </p>
        </div>
    </div>
)

// const Business = () => {
//     return (
//         <section>
            
//         </section>
//     )
// }


export default FeatureCard