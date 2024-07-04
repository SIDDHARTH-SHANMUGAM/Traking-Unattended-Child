import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Missing() {

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
      formData.append('caseType', 'missing');
      formData.append('name', name);
      formData.append('age', age);
      formData.append('gender', gender);

      await axios.post("http://localhost:8000/uploadMissing", formData);

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
          <p>Add Missing Case</p>
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

export default Missing


// import axios from '../axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import styled from 'styled-components'

// function Add() {

//   const [num , setnum] = useState(1);
//   const [image, setImage] = useState('');
//   const [name, setName] = useState('');
//   const [age, setAge] = useState(0);
//   const [gender, setGender] = useState('');
//   const navigate = useNavigate();
//   let form
//   let head

//    function convertToBase64(e){
//     console.log(e);
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload= ()=>{
//       console.log(reader.result);
//       setImage(reader.result);
//     };
//     reader.onerror = error => {
//       console.log("error ", error);
//     };
//   }
//   async function uploadImage(e){
//     e.preventDefault();
//     try{
//       const res= await axios.post("http://localhost:8000/cardUploadunattend", {
//         image, name, age, gender
//       })
//       if(res)
//         navigate('/home');
//       else
//         alert(res);
//     }
//     catch(e){
//       console.log(e);
//     }
//   }

//   if(num !== 1)
//   {
//       if(num !== 3)
//       {
//       head =
//         <Head>
//               <img src='/im.svg' alt=""/>
//               <p>Add Unattended Case</p>
//         </Head>
//       form = 
//         <div>
//         <Form>
//           <Tittle>
//             <h3>profile of Unattended</h3>
//           </Tittle>
//           <InputContainer>
//           <p>Image of victim</p>
//           <input  
//             type='file' 
//             accept='image/*' 
//             onChange={convertToBase64}
//           />
//           </InputContainer>
//           <InputContainer>
//           <p>Name</p>
//           <input 
//             type='text' 
//             placeholder='Name of victim' 
//             onChange={(e) => { setName(e.target.value) }} 
//           />
//           </InputContainer>
//           <InputContainer>
//           <p>Age</p>
//           <input 
//             type='number' 
//             placeholder='Age of victim'  
//             onChange={(e) => { setAge(e.target.value) }} 
//           />
//           </InputContainer>
//           <InputContainer>
//           <p>Gender</p>
//           <input 
//             type='text' 
//             placeholder='gender'
//             onChange={(e) => { setGender(e.target.value) }} 
//           />
//           </InputContainer>
//         </Form>
//         <br></br>
//         <Form>

//         </Form>
//           <SubmitButton>
//             <input type='submit' onClick={ uploadImage }/>
//           </SubmitButton>
//         </div>
//       }
//       else{
//         head =
//     <Head>
//           <img src='/im.svg' alt=""/>
//           <p>Add Missing Case</p>
//     </Head>
//         form = 
//         <GrigContainer>
          
//         <Form>
//           <Tittle>
//             <h3>profile of victim</h3>
//           </Tittle>
//           <InputContainer>
//           <p>Choose Profile of victim</p>
//           <input  
//             type='file' 
//             accept='image/*' 
//             onChange={convertToBase64}
//           />
//           </InputContainer>
//           <InputContainer>
//           <p>Name</p>
//           <input 
//             type='text' 
//             placeholder='Name of victim' 
//             onChange={(e) => { setName(e.target.value) }} 
//           />
//           </InputContainer>
//           <InputContainer>
//           <p>Age</p>
//           <input 
//             type='number' 
//             placeholder='Age of victim'  
//             onChange={(e) => { setAge(e.target.value) }} 
//           />
//           </InputContainer>
//           <InputContainer>
//           <p>Gender</p>
//           <input 
//             type='text' 
//             placeholder='gender'
//             onChange={(e) => { setGender(e.target.value) }} 
//           />
//           </InputContainer>
//         </Form>
        
//         </GrigContainer>
//       }

//   }
//   else
//   {
//     head =
//     <Head>
//           <img src='/im.svg' alt=""/>
//           <p>Tracking Unattended child</p>
//     </Head>
//     form =
//     <Form>
//         <Tittle>
//           <h3>Add Case</h3>
//         </Tittle>
//         <Option onClick={()=> setnum(2)}>
//           <p  >Unattended</p>
//         </Option>
//         <Option onClick={()=> setnum(3)}>
//           <p>Missing</p>
//         </Option>
        
//     </Form>
//   }

//   return (
//     <Container>
//         { head }
//         { form }

      
//     </Container>
//   )
// }

// const Container = styled.div`
//   width : 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

// `;

// const GrigContainer = styled.div`
//   display: grid;
//   justify-content: center;
//   place-items: center;
//   width: 50%;

//   grid-template-rows: 500px;
//   grid-template-columns: repeat(1, 300px);
//   grid-gap: 20px;

//   @media only screen and  (min-Width: 1000px){
//     grid-template-columns: repeat(2, 80%);
//   }
//   @media only screen and (max-width: 1000px) {
//     grid-template-columns: repeat(1, 80%);
//   }
// `;

// const Head = styled.div`
//   display: flex;
//   flex-direction : row;
//   place-items: center;
//   font-size: 20px;
//   img{
//     width: 100px;
//   }
// `;

// const Form = styled.div`
//   width : 300px;
//   display : flex;
//   background-color: white;
//   flex-direction : column;
//   padding-left: 5%;
//   padding-right: 5%;
//   padding-bottom: 5%;
//   border-radius:5px;

// `;

// const Tittle = styled.div`
//   display: flex;
//   justify-content: center;
//   color: #ffa807ce;
// `;

// const Option = styled.div`
//   display: flex;
//   justify-content: center;
//   width : 100%;

//   :hover{
//     border: 2px solid #ffa807ce;
//     border-radius: 5px;
//     cursor: pointer;
//   }
// `;

// const InputContainer =styled.div`
//   display: flex;
//   place-items: center;


//   p{
//     font-size: 15px;
//     width: 30%;
//       }

//     input{
//     font-size: 14px;
//       height: 18px;
//     }

    
    
// `;

// const SubmitButton =styled.div`
//   display: flex;
//   padding : 10px;
//   justify-content: center;
//   input{
//     width: 150px;
//     height: 30px;

//     :hover{
//       border: 2px solid #ffa807ce;
//       border-radius: 5px;
//       color: #ffa807ce;
//       cursor: pointer;
//     }
//   }
// `;

// export default Add
