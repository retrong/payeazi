import React from 'react';
import styles from "../../style.js";
import GetStarted from "../atoms/GetStarted.jsx";

const Cta = () => {
  return (
    <section className={`${styles.padding} ${styles.flexCenter} flex-wrap bg-[#f9fbdf] rounded-[24px] mb-5 relative top-[-200px] max-md:top-[0px] max-sm:mt-2`}>
      <div>
        <h2 className={`font-cabin font-semibold xs:text-[52px] text-[42px] text-black xs:leading-[76.8px] leading-[66.8px] w-full`}>Start Making Payment Now </h2>
        <p className={`font-cabin font-normal text-black text-[20px] leading-[28px] max-w-[470px] mt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${styles.flexCenter} ml-0 md:ml-10`}>
        <GetStarted styles="cta-button"/>
      </div>
    </section>
  )
}

export default Cta