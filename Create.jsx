import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(name,email,age);
  

  const hadleSubmit = async(e)=>{
    e.preventDefault();
    const addUser = {name,email,age};

    const resp = await fetch("http://localhost:4000/api/user", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await resp.json();

    if(!resp.ok){
      console.log(result.error);
      setError(result.error);
    }
    if(resp.ok){
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setAge("");
      navigate("/all")
    }

  }

  return (
    <div classNameName='container my-2'>

      {error && <div class="alert alert-danger">
        {error}
</div>}
      <h2 classNameName='text-center'>Enter the data</h2>

      <form onSubmit={hadleSubmit}>
  

  <div className="mb-3">
    <label  className="form-label">Enter Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    
  </div>
  <div className="mb-3">
    <label >Age</label>
    <input type="number" className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
