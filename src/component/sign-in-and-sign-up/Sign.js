import React from 'react'
import './Sign.styles.css';
import SignIn from './../../Sign-In/SignIn';
import Header from '../Header/Header';
import SignUp from './../SignUp/SignUp';

const Sign = () => (
    <div >
      <div>
        <Header />
      </div>
      <div className='sign'>
        <SignIn />
        <SignUp /> 
      </div>
    </div>
  )


export default Sign;