import React from 'react';
import styles from "../../style.js";
import GetStarted from "../atoms/GetStarted.jsx";

const Cta = () => {
  return (
    <section className={`${styles.padding} ${styles.flexCenter} bg-[#f9fbdf] rounded-[24px] mb-5`}>
      <div className='mr-5'>
        <h2 className={`font-cabin font-semibold xs:text-[52px] text-[42px] text-black xs:leading-[76.8px] leading-[66.8px] w-full`}>Start Making Payment Now </h2>
        <p className={`font-cabin font-normal text-black text-[20px] leading-[28px] max-w-[470px] mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div>
        <GetStarted />
      </div>
    </section>
  )
}

export default Cta