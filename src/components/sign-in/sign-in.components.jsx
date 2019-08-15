import React from 'react';

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-buttom/custom-buttom.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit =  evt => {
        evt.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = evt => {
        const {value, name} = evt.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>

                <span>Sign in with your email and password</span>



                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name="email"
                        type="email" value={this.state.email} 
                        required id="user-email"
                        handleChange={this.handleChange}
                        label="Email"
                    />

                    <FormInput 
                        name="password"
                        type="password" value={this.state.password} required id="user-password"
                        handleChange={this.handleChange}
                        label="Password"
                    />
                    
                    

                    <div className='buttons'><CustomButtom type="submit" value="Sign In">
                    Sign In
                    </CustomButtom>
                    
                    <CustomButtom value="Sign In with Google"
                    onClick={signInWithGoogle} isGoogleSignIn
                    >
                    Sign In With Google
                    </CustomButtom></div>

                </form>
            </div>
        );
    }
}


export default SignIn;