import styled from "styled-components";
import React from "react";
import { auth, provider } from "../firebase";
function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://miro.medium.com/max/3150/1*a1O3xhOq8KWSibZF6Ze5xQ.png"
          alt=""
        />
        <h1>Sign In to the PAPA FAM</h1>
        <p>papa.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px -1px #000000;
  box-shadow: 5px 5px 15px -1px #000000;
  img {
    height: 100px;
    margin-bottom: 40px;
    object-fit: contain;
  }
`;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  margin-top: 50px;
  text-transform: inherit;
  background-color: #0a8d48;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
`;
