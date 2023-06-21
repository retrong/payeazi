import React from 'react';
import Navbar from '../UI/molecules/Navbar';
import styles from '../style';

const landingPage = () => (
    <section className='bg-primary w-full overflow-hidden h-15 shadow'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>

        </div>
    </section>
);


export default landingPage;
