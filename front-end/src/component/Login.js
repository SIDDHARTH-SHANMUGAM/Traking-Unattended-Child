import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Login() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/", {
        mobile, password
      })
      .then(res=>{
        if(res.data==="Exist"){
          navigate('/home');
        }
        else if(res.data==="not Exist")
        {
          alert("Incorrect Mobile Number");
        }
        else if(res.data==="Password is Wrong")
        {
          alert("Incorrect Password");
        }
      })
      .catch(e=>{
        alert(e)
      })
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    
    <Container>
        <Head>
          <img src='/im.svg' alt=""/>
          <p>Tracking Unattended child</p>
        </Head>
      <Form>
        <Tittle>
          <h3>Login</h3>
        </Tittle>
        <InputContainer>
          <p>Mobile Number</p>
          <input type='number' placeholder='Enter mobile number'  onChange={(e) => { setMobile(e.target.value) }} />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
        </InputContainer>
        <SubmitButton>
          <input type='submit' onClick={ submit }/>
        </SubmitButton>
      </Form>
      <HaveAccount>
        <p>have no account?</p>
        <Link to='/signup'>
          <Signup>
            <p>signup</p>
          </Signup>
        </Link>
      </HaveAccount>
    </Container>
  )
}


const Container = styled.div`
  width : 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

`;

const Head = styled.div`
  display: flex;
  flex-direction : row;
  place-items: center;
  font-size: 20px;
  padding-right: 6%;
  img{
    width: 100px;
  }
`;

const Form = styled.div`
  width : 70%;
  height: 80%;
  display : flex;
  background-color: white;
  flex-direction : column;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
  border-radius:5px;

  @media only screen and (min-width: 550px)
  {
      width: 350px;
  }

`;

const Tittle = styled.div`
  display: flex;
  justify-content: center;
  color: #ffa807ce;
`;

const InputContainer =styled.div`
  display: flex;
  place-items: center;


  p{
    font-size: 15px;
    width: 30%;
      }

    input{
    font-size: 14px;
      height: 18px;
    }

    @media only screen and (min-width: 550px)
    {
        padding-left: 15%;
    }
`;

const HaveAccount =styled.div`
  display: flex;
  flex-directon: row;
  place-items: center;
  p{
    padding-right:10px;
  }

`;

const SubmitButton =styled.div`
  display: flex;
  padding : 10px;
  justify-content: center;
  input{
    width: 150px;
    height: 30px;

    :hover{
      border: 2px solid #ffa807ce;
      border-radius: 5px;
      color: #ffa807ce;
      cursor: pointer;
    }
  }
`;

const Signup = styled.div`
p{
  :hover{
    color: #ffa807ce;
  }
}
`;


export default Login

