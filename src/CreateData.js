import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateData() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/create', { name, email, address })
    .then(res => {
      console.log(res);
      navigate('/');
    }).catch(err => console.log(err));
  }
  return (

    <div className='myclass2'>
      <form onSubmit={handleSubmit}>
        <h2>Add More</h2>
        Name &nbsp; &nbsp; <input type='text' name='name' id='btn2' onChange={e => setName(e.target.value)} placeholder='UserName' />
        <br /><br />
        Email &nbsp; &nbsp; <input type='email' id='btn3' name='email' placeholder='UserEmail' onChange={e => setEmail(e.target.value)} />
        <br /><br />
        Address &nbsp; &nbsp; <input type='text' id='btn4' name='address' placeholder='UserAddress' onChange={e => setAddress(e.target.value)} />
        <br /><br />
        <button id='btn5'>Submit</button>
      </form>
    </div>
  )
}

export default CreateData
