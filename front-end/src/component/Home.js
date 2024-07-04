import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import Navbar from './Navbar';
import Card from './Card';

function Home() {
  const [casearray, setCase] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const data= await axios.get("http://localhost:8000/viewCard")
      console.log(data);
      setCase(data)
      
  };
    fetchData();
  }, []);


  return (
    <Container>
        <Navbar/>
        <Main>
          {
            casearray && casearray?.data.reverse().map(
              (casearry) =>(
                <Card
                  imageUrl = {casearry.photo}
                  type = {casearry.caseType}
                  name = {casearry.name}
                  age = {casearry.age}
                  gender = {casearry.gender}
                />
              )
              )
          }
          
        </Main>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background-color: rgb(234,237,237);
`;

const Main = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: grid;
    justify-content: center;
    place-items: center;
    width: 100%;

    grid-auto-rows: 380px;
    grid-template-columns: repeat(4, 300px);
    grid-gap: 20px;

    @media only screen and  (min-Width: 1600px){
      grid-template-columns: repeat(6,  15%);
    }
    @media only screen and  (mix-width: 1200px), (max-Width: 1600px){
      grid-template-columns: repeat(5, 18%);
    }
    @media only screen and  (mix-width: 1026px), (max-Width: 1200px){
      grid-template-columns: repeat(4, 23%);
    }
    @media only screen and  (mix-width: 801px), (max-Width: 1025px){
      grid-template-columns: repeat(3, 28%);
    }
    @media only screen and  (mix-width: 561px), (max-Width: 800px){
      grid-template-columns: repeat(2, 40%);
    }
    @media only screen and (max-width: 560px) {
      grid-template-columns: repeat(1, 60%);
    }
`;

export default Home
