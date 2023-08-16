import React from 'react'
import styles from '../style.js';
import './SignIn-Signout.css'

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
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <section className={`w-full overflow-hidden shadow`}>
                <div className={`${styles.paddingX} ${styles.flexCenter} flex-col`}>
                    <h1>I already have an account</h1>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
                        <input
                            name='email'
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <label>Email</label>

                        <input
                            name='password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        <label>Password</label>
                        <input type='submit' value='Submit Form'/>
                    </form>

                </div>
            </section>
        )

    }
}
export default SignIn;