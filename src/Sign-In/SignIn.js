import React, { Component } from 'react';
import FormInput from './../component/FormInput/FormInput';
import CustomButton from './../component/CustomButton/CustomButton';
import { signInWithGoogle } from './../component/Firebase/Firebase.utils';


class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }


  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email:'', password:''
    })
  }

  handleChange = (event) => {
    console.log(event)
    const {value, name } = event.target;
    this.setState({[name]:value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>


   <form onSubmit={this.handleSubmit}>
    <FormInput type='email' name='email' handleChange={this.handleChange} value={this.state.email} required
    label='email'
    />
    
       <FormInput type='password' name='password' handleChange={this.handleChange} value={this.state.password} required
       label='password'
       />
       
       <div className='buttons'>
 <CustomButton type='submit'>
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}  isGoogleSignIn >
            Sign In With Google
          </CustomButton>
       </div>

         
       </form>

      </div>
    )
  }
}

export default SignIn;