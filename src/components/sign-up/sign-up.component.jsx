import React from "react";

import FormImput from "../form-input/form-input.component";

import CustomButton from "../custom-buttom/custom-buttom.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email:'',
            password:'',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Password Does Not Match");
            return;
        } 

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email:'',
                password:'',
                confirmPassword: ''
            });



        }catch(e) {
            console.log(e)
        }
    }

    handleChange = evt => {
        const {name, value} = evt.target;

        this.setState({[name]:value})
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormImput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange = {this.handleChange}
                        label="Display Name"
                        id="fiels-display-name"
                        required
                    />
                    <FormImput 
                        type="email"
                        name="email"
                        value={email}

                        onChange = {this.handleChange}
                        label="Email"
                        id="field-email"
                        required
                    />
                    <FormImput 
                        type="password"
                        name="password"
                        value={password}

                        onChange = {this.handleChange}
                        label="Password"
                        id="field-password"
                        required
                    />
                    <FormImput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}

                        onChange = {this.handleChange}
                        label="Confirm Password"

                        id="field-confirm-password"
                        required
                    />

                    <CustomButton type="submit"> Sign Up </CustomButton>

                </form>
            </div>
        )
    }
}



export default SignUp;