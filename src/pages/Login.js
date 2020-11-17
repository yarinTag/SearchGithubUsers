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
    width: 115vh;
    display: block;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
  }
  .btn {
    text-align:center;
    text-transform: uppercase;
    background: #00d1e4;
    color: #e0fcff;    
    padding-top: 0.375rem;
    padding-right: 0.75rem;
    padding-bottom: 0.375rem;
    padding-left: 0.75rem;
    letter-spacing: 0.32rem;
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 1.3rem;
    border: 2px solid transparent;
    border-top-color: transparent;
    border-top-style: solid;
    border-top-width: 2px;
    border-right-color: transparent;
    border-right-style: solid;
    border-right-width: 2px;
    border-bottom-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-left-color: transparent;
    border-left-style: solid;
    border-left-width: 2px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    cursor: pointer;
    box-shadow:  -11px 9px 5px 2px rgba(0,0,0,.2);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;
export default Login;