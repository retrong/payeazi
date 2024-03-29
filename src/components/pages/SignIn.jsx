import React from 'react';
import { Link } from 'react-router-dom';
import { backArrow, logoBlack } from '../../assets';
import FormInput from '../UI/molecules/form-input.component';
import styles from '../style.js';
import './SignIn-Signout.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    };

    render() {
        return (
            <>
                {/* <header className={`${styles.flexLStart} w-full px-[16px] sm:px-[6px]`} >
                    <Link to="/home" className='flex flex-row'>
                        <img src={backArrow} alt="Back home" />
                        <h2 className={`${styles.heading2} text-black`}>Home</h2>
                    </Link>
                    

                </header> */}
                
                <section className={`overflow-hidden h-[100svh] flex flex-col justify-center ${styles.flexCenter}`}>
                    <header className={`${styles.flexLStart} w-full px-[32px] sm:px-[24px]`} >
                        <Link to="/home" className='signin-header mb-5'>
                            <img src={backArrow} alt="Back home" className='w-[25px] object-contain mr-2'/>
                            <h2 className={`font-cabin font-semibold xs:text-[20px] text-[18px] xs:leading-[30.8px] leading-[66.8px] w-full text-black`}>Home</h2>
                        </Link>

                    </header>

                    <div className={`flex-col flex-wrap sign-in-container py-[50px] px-[50px]`}>
                        <div className={`py-2 w-auto sm:w-[350px] px-2`}>
                            <div className='flex justify-center'>
                                <img src={logoBlack} alt='main logo' className='h-[60px] w-[100px] object-contain' />
                            </div>
                            <h1 className='font-cabin font-[600] xs:text-[24px] text-[30px] xs:leading-[64.8px] leading-[60.8px] w-full'>I already have an account</h1>
                            <span className='font-cabin font-normal text-[16px] leading-[22px]'>Sign in with your email and password</span>

                            <form onSubmit={this.handleSubmit}>
                                <FormInput
                                    name='email'
                                    type='email'
                                    value={this.state.email}
                                    label='Email'
                                    handleChange={this.handleChange}
                                    required
                                />

                                <FormInput
                                    name='password'
                                    type='password'
                                    value={this.state.password}
                                    label='Password'
                                    handleChange={this.handleChange}
                                    required
                                />
                                <input type='submit' value='Sign in' className='submit-button bg-gray-200 font-cabin'/>
                                <p className='mt-5 flex flex-row justify-center gap-2 account-link'> No account? <Link to='/register' className='text-blue-400'> Create one </Link></p>
                            </form>
                        </div>

                    </div>
                </section>

            </>
        )
    }
}
export default SignIn;