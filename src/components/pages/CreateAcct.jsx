// import { Link } from 'react-router-dom';
import { logoBlack } from '../../assets';
// import FormInput from '../UI/molecules/form-input.component';
import styles from '../style';

export const CreateAcct = () => {
    return (
        <section className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div>
                    <div className={`flex-col flex-wrap sign-in-container py-[50px] px-[50px]`}>
                        <div className={`py-2 w-auto sm:w-[350px] px-2`}>
                            <div className='flex justify-center'>
                                <img src={logoBlack} alt='main logo' className='h-[60px] w-[100px] object-contain' />
                            </div>
                            <h1 className='font-cabin font-[600] xs:text-[24px] text-[30px] xs:leading-[64.8px] leading-[60.8px] w-full'>I already have an account</h1>
                            <span className='font-cabin font-normal text-[16px] leading-[22px]'>Sign in with your email and password</span>

                            {/* <form onSubmit={this.handleSubmit}>
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
                                <p className='mt-5 flex flex-row justify-center gap-2 account-link'> Have an account? <Link to='/signin' className='text-blue-400'> Login </Link></p>
                            </form> */}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
