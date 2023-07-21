import React from 'react';
import { feedback } from '../../../constants';
import styles, { layout } from '../../style';
import FeedbackCard from '../atoms/FeedbackCard';

const Testimonies = () => (
    <section className={`${layout.section}`}>
        <div>
            <h1>What people are <br className='sm:block hidden'/> saying about us</h1>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea quis dolorum ut iure, porro esse.
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