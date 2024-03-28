import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {id} = useParams(); 


  //get single user data
  const getSingleUser = async() =>{
   
    const resp = await fetch(`http://localhost:4000/api/user/${id}`);
    const result = await resp.json();

    if(!resp.ok){
      console.log(result.error);
      setError(result.error);
    }

    if(resp.ok){
      setError("");
      console.log('updated user', result);
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    }
  };

  const handleUpdate= async(e) => {
    e.preventDefault();
    const updatedUser = {name,email,age};

    const resp = await fetch(`http://localhost:4000/api/user/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
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
      navigate("/all")
    }
  }

  useEffect(() => {
    getSingleUser();
  }, [])



  return (
    <div classNameName='container my-2'>

      {error && <div class="alert alert-danger">
        {error}
</div>}
      <h2 classNameName='text-center'>Edit the data</h2>

      <form onSubmit={handleUpdate}>
  

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
