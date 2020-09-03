import React from 'react'
import './Sign.styles.css';
import SignIn from './../../Sign-In/SignIn';
import Header from '../Header/Header';

const Sign = () => (
    <div >
      <div>
        <Header />
      </div>
      <div className='sign'>
        <SignIn />
      </div>
    </div>
  )


export default Sign;