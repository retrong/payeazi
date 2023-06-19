import React from 'react';
import Navbar from '../UI/molecules/Navbar';
import styles from '../style';

const landingPage = () => (
    <div className='w-full overflow-hidden h-15 shadow'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>

        </div>
    </div>
);


export default landingPage;
