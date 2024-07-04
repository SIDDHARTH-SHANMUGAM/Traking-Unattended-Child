import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Add() {

  const navigate = useNavigate();
  return (
    <Container>
      <Head>
        <img src='/im.svg' alt=""/>
        <p>Tracking Unattended child</p>
     </Head>
     <Form>
        <Tittle>
        <h3>Add Case</h3>
        </Tittle>
        <Option onClick={()=> navigate('/addUnattend')}>
        <p  >Unattended</p>
        </Option>
        <Option onClick={()=> navigate('/addMissing')}>
          <p>Missing</p>
        </Option>
     </Form>
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

const Option = styled.div`
  display: flex;
  justify-content: center;
  width : 100%;

  :hover{
    border: 2px solid #ffa807ce;
    border-radius: 5px;
    cursor: pointer;
  }
`;


export default Add
