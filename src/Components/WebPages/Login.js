import React from 'react'
import LoginPage from '../../Components/Register/LoginPage';
import Footers from '../Footers/Footers';
import SocialAccounts from '../SocialAccounts/SocialAcc';
import Navbar from '../MenueBar/MenueBar';


 function Login() {
  return (
    <>
      <Navbar />
      <LoginPage />

      <Footers />
      <SocialAccounts />
    </>
  )
}

export default Login ;
