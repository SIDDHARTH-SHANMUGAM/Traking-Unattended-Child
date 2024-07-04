import React from 'react'
import styled from 'styled-components'

function Fingerprint() {
  return (
    <Container>
        <Head>
            <img src='/svg/im.svg' alt=""/>
            <p>Add Unattended Case</p>
        </Head>
        <Form>
          <Tittle>
            <h3>Authenticate</h3>
          </Tittle>
          <InputContainer>
          <p>press your finger on scanner</p>
          </InputContainer>
          <InputContainer>
          <img src='/svg/fi.svg' alt=''/>
          </InputContainer>
          
          
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


const InputContainer =styled.div`
  display: flex;
  place-items: center;
  justify-content: center;

  img{
    width: 100px;
  }


`;




export default Fingerprint

