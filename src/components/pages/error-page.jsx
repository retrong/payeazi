import React from 'react';
import { useRouteError } from "react-router-dom";
import { errorPage } from '../../assets';
import styles from '../style';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  return (
    <section id='error-page' className={`${styles.boxWidth} ${styles.flexCenter}`}>
        <div className='flex flex-col items-center'>
            <img src={errorPage} alt="error" />
            <div className={`${styles.paddingY} font-cabin font-semibold text-[20px] leading-[28px] flex flex-col justify-center items-center`}>
                <h1 className='mb-4'>Oops!</h1>
                <p className='mb-4'>Sorry, an unexpected error has occurred</p>
                <p className='font-bold text-[32px] leading-[38px] text-red-400'>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>

        </div>

    </section>
  )
}
