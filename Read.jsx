
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Read = () => { 
  const [data, setData] = useState();
const [error, setError] = useState("");

  async function getData(){
    const resp = await fetch("http://localhost:4000/api/user");

    const result = await resp.json();

    if(!resp.ok){
      console.log(result.error);
      setError(result.error);
    }

    if(resp.ok){
      setData(result);
    }
  }


  const handleDelete = async(id) => {
    const resp = await fetch(`http://localhost:4000/api/user/${id}`, {
      method : "DELETE"
    });

    const result = await resp.json();

    if(!resp.ok){
      console.log(result.error);
      setError(result.error);
    }

    if(resp.ok){
      setError("Deleted Successfully");

      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }

  }

  useEffect(()=>{
    getData();
  }, []);

  console.log(data)


  return (
    <div className='container my-2'>
      {error && <div class="alert alert-danger">
        {error}
</div>}
      <h2 className='text-center'>All Data</h2>
    <div className='row'>
    {data?.map((ele)=>(
      <div className='col-3' key={ele._id}>

      <div class="card">
    <div class="card-body">
      <h5 class="card-title">{ele.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{ele.email}</h6>
      <p className='text-muted'>{ele.age}</p>
      <a href="#" class="card-link" onClick={() =>handleDelete(ele._id)}>Delete</a>
      <Link to={`/${ele._id}`} class="card-link">Edit</Link>
    </div>
  </div>
      </div>
    ))}
    
    </div>
    </div>
  )
}

export default Read;
