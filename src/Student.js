import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Student() {
    const[student, setStudent] = useState([]);
    useEffect(() => {
        axios.get('https://crud-app-7ghp.onrender.com/')
            .then(res => setStudent(res.data))
            .catch(err => console.log(err))
    })
    const handleDelete = async (id) => {
        try {
            await axios.delete('https://crud-app-7ghp.onrender.com/'+id)
            window.location.reload();
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Link to='/create' className='btn1'>Add More</Link>
            <div className='myclass1'>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data, i)=> (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address}</td>
                                    <Link to = {`update/${data.id}`} className='btn btn-success'>Update</Link>
                                    <button className='btn btn-danger' onClick={ e => handleDelete(data.id)}>Delete</button>
                                
                                </tr>
                            ))
                        }
                    </tbody>
                </table>



            </div>
        </div>
    )
}

export default Student


