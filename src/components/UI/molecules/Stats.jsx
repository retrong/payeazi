import { stats } from '../../../constants';
import styles from '../../style';

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        <div className='bg-white rounded-full w-full'>
            {stats.map((stat) => (
                <div key={stat.id} className={`flex flex-row`}>
                    <h4>{stat.value}</h4>
                    <p>{stat.title}</p>

                </div>
            ))}
        </div>

    </section>
)


export default Stats