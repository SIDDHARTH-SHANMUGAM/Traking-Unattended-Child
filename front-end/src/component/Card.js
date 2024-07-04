import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function Card({imageUrl, type , name, age, gender}) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/detail')}>
      <ImageC>
        <img src={imageUrl} alt={imageUrl} />
      </ImageC>
        <TypeContainer>
            <h3>{type}</h3>
        </TypeContainer>
      <Description>
        <NameContainer>
          <Label>
            <h4>Name</h4>
          </Label>
          <Value>
            <p>{name}</p>
          </Value>
        </NameContainer>
        <AgeContainer>
          <Label>
            <h4>Age</h4>
          </Label>
          <Value>
            <p>{age}</p>
          </Value>
        </AgeContainer>
        <GenderContainer>
          <Label>
            <h4>Gender</h4>
          </Label>
          <Value>
            <p>{gender}</p>
          </Value>
        </GenderContainer>
      </Description>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height :100%;

display: flex;
flex-direction: column;
background-color: #fff;
border-radius : 5px;
align-items: center;

:hover{
  cursor: pointer;
  width:101%;
  height: 101%;
}
`;

const ImageC = styled.div`
top: 0px;
width: 100%;
height: 50%;
display: flex;
flex-direction: column;

img{
  width: 100%;
  height: 100%;
  border-radius : 5px 5px 0px 0px;
}
`;

const TypeContainer = styled.div`
  height: 10%;
  color: #ffa807f5;
`;

const Description = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;


const NameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const AgeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const GenderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Label = styled.div`
  height: 35px;
  width: 33%;
  padding-left: 15px;
`;
const Value = styled.div`
  height: 35px;
  width: 65%;
  font-size: 13px;
  padding-top: 10px;
`;

export default Card
