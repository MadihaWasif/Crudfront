import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

   const {id} = useParams(); //this is for updation the data by id
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.put('https://crud-app-7ghp.onrender.com/update/'+id, { name, email, address })
    .then(res => {
      console.log(res);
      navigate('/');
    }).catch(err => console.log(err));
  }
  return (

    <div className='myclass2'>
      <form onSubmit={handleSubmit}>
        <h2>Update Data</h2>
        Name &nbsp; &nbsp; <input type='text' name='name' id='btn2' onChange={e => setName(e.target.value)} placeholder='UserName' />
        <br /><br />
        Email &nbsp; &nbsp; <input type='email' id='btn3' name='email' placeholder='UserEmail' onChange={e => setEmail(e.target.value)} />
        <br /><br />
        Address &nbsp; &nbsp; <input type='text' id='btn4' name='address' placeholder='UserAddress' onChange={e => setAddress(e.target.value)} />
        <br /><br />
        <button id='btn5' className='btn btn-dark'>Update</button>
      </form>
    </div>
  )
}

export default Update
