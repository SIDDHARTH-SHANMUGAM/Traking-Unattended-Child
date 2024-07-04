import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Unattend() {


    const [photo, setImage] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

  function handleImage(e)
  {
    setImage(e.target.files[0])
  }

  async function submit(e){
      e.preventDefault();
      try{
        navigate('/home');
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('caseType', 'un-attended');
        formData.append('name', name);
        formData.append('age', age);
        formData.append('gender', gender);

        await axios.post("http://localhost:8000/uploadUnattendCard", formData);

      }
      catch(e)
      {
        console.log(e);
      }
  }


  return (
    <Container>
         <Head>
            <img src='/im.svg' alt=""/>
            <p>Add Unattended Case</p>
        </Head>
        <Form>
          <Tittle>
            <h3>profile of victim</h3>
          </Tittle>
          <InputContainer>
          <p>Choose Profile of victim</p>
          <input  
            type='file' 
            accept='image/*' 
            onChange={handleImage}
          />
          </InputContainer>
          <InputContainer>
          <p>Name</p>
          <input 
            type='text' 
            placeholder='Name of victim' 
            onChange={(e) => { setName(e.target.value) }} 
          />
          </InputContainer>
          <InputContainer>
          <p>Age</p>
          <input 
            type='number' 
            placeholder='Age of victim'  
            onChange={(e) => { setAge(e.target.value) }} 
          />
          </InputContainer>
          <InputContainer>
          <p>Gender</p>
          <input 
            type='text' 
            placeholder='gender'
            onChange={(e) => { setGender(e.target.value) }} 
          />
          </InputContainer>
        </Form>
        {/* <br></br>
        <Form>
          <Tittle>
            <h3>Additional Info</h3>
          </Tittle>
          <InputContainer>
          <p>Add images</p>
          <input 
            type='text' 
            placeholder='Name of victim' 
          />
          </InputContainer>
          <InputContainer>
          <p>Age</p>
          <input 
            type='number' 
            placeholder='Age of victim'  
          />
          </InputContainer>
          <InputContainer>
          <p>Gender</p>
          <input 
            type='text' 
            placeholder='gender'
          />
          </InputContainer>
        </Form> */}
        <SubmitButton>
            <input type='submit' onClick={ submit }/>
        </SubmitButton>
    </Container>
  )
}


const Container = styled.div`
  width : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;


const Head = styled.div`
  display: flex;
  flex-direction : row;
  place-items: center;
  font-size: 20px;
  img{
    width: 100px;
  }
`;

const Form = styled.div`
  width : 300px;
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


export default Unattend