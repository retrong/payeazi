import React from 'react';
import { worldMap } from '../../../assets';
import styles, { layout } from '../../style';
import GetStarted from '../atoms/GetStarted';

const Deals = () => {
  return (
    <section className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <img src={worldMap} alt="world-map" className='w-[100%] h-[100%] z-[5]'/>
        </div>

        <div>
            <h2 className={`${styles.heading2}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, ipsum.
            </h2>
            <p className={`${styles.paragraph}`}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quisquam quis? Recusandae, quo enim aspernatur blanditiis dicta voluptas quisquam perferendis? 
            </p>
            <GetStarted />

        </div>
    </section>
  )
}

export default Deals