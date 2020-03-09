import React from 'react';

import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }
  handleChange = e => {
    //   our e.target will be input value itself
    const { name, value } = e.target;

    this.setState({ [name]: value })
  }
  render() {
    return (

      <div className="sign-in">
        <h2> I already have an Account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="name"
            label="Email"
            value={this.state.email} handleChange={this.handleChange} required />

          <FormInput name="password"
            label="Password"
            handleChange={this.handleChange} type="password" value={this.state.password} required />
            
            <div className="button"> 

          <CustomButton type="submit" >Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn > {''}Sign In with Google {''}</CustomButton>
            </div>
        </form>

      </div>
    )
  }
}
export default SignIn;