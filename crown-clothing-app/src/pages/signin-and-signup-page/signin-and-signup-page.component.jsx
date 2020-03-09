import React from 'react';
import SignIn from '../../Components/sign-in/signin.component';
import SignUp from '../../Components/sign-up/sign-up.component';
import './signin-and-signup-page.styles.scss';

const SignInAndSignUp= () => (

    <div className="signin-and-signup">
       <SignIn />
       <SignUp />
    </div>
)
export default SignInAndSignUp;
