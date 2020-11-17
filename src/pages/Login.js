import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
const Login = () => {
  const {loginWithRedirect}=useAuth0();
  return (
  <Wrapper>
    <div className="container">
      <img src={loginImg} alt="github user"/>
      <h1>Github User</h1>
      <button className="btn" onClick={loginWithRedirect}>Login / Sign Up</button>
    </div>
  </Wrapper>
  )
};
const Wrapper = styled.section`
  min-height: 95vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vh;
    max-width: 600px;
    margin-right: 350px;
    text-align: center;
    height: 75vh;
  }
  img {
    margin-bottom: 1rem;
    
  }
  h1 {
    margin-bottom: 1rem;
    margin-left: 15rem;
  }
  .btn {
    margin-left: 15rem;
  

  }
`;
export default Login;