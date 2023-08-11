import React from 'react';
import { useRouteError } from "react-router-dom";
import { errorPage } from '../../assets';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  return (
    <section id='error-page'>
        <img src={errorPage} alt="" />
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>

    </section>
  )
}
