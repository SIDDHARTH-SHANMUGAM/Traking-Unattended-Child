import axios from 'axios';
import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import styled from 'styled-components';

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/signup", {
        name, mobile, email, password
      })
      .then(res=>{
        if(res.data==="Email is already Exist"){
          alert(" Email is already Exist")
        }
        else if(res.data==="Mobile is already Exist")
        {
          alert(" Mobile is already Exist")

        }
        else if(res.data==="not Exist")
        {
          navigate('/home');
        }
      })
      .catch(e=>{
        alert("wrong details" + e)
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
          <h3>Sign Up</h3>
        </Tittle>
        <InputContainer>
          <p>Name</p>
          <input type='text' onChange={(e) => { setName(e.target.value) }} />
        </InputContainer>
        <InputContainer>
          <p>Mobile Number</p>
          <input type='number'  onChange={(e) => { setMobile(e.target.value) }} />
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input type='email' onChange={(e) => { setEmail(e.target.value) }} />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type='password' onChange={(e) => { setPassword(e.target.value) }} />
        </InputContainer>
        <SubmitButton>
          <input type='submit' onClick={ submit }/>
        </SubmitButton>
      </Form>
      <HaveAccount>
        <p>have an account already? </p>
        <Link to='/'>
          <Login>
            <p>login</p>
          </Login>
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
  width : 60%;
  height: 80%;
  display : flex;
  background-color: white;
  flex-direction : column;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
  border-radius:5px;

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

const Login = styled.div`
  p{
    :hover{
      color: #ffa807ce;
    }
  }
`;

export default Signup
