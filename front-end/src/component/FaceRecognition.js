import React, { useState } from 'react';
import axios from 'axios';

function FaceRecognition() {
   const [photo, setImage] = useState('');

function handleImage(e)
{
  setImage(e.target.files[0])
}

async function submit(e){
    e.preventDefault();
    try{
      const formData = new FormData();
      formData.append('photo', photo);
      await axios.post("http://localhost:8000/face", formData);

    }
    catch(e)
    {
      console.log(e);
    }

}
  return (
    <div>
      <input  
            type='file' 
            accept='image/*' 
            onChange={handleImage}
          />
      <input type='submit' onClick={ submit }/>
    </div>
  )
}

export default FaceRecognition
