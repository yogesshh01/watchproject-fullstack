import React from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
const Singup = () => {
  const navigate = useNavigate()
const[data,setdata] = useState({
   name: "",
    email: "",
    password: "",
})
  
  const handleform = (e)=>{
setdata({
  ...data,
  [e.target.name]:e.target.value
})
  }

  const handlesubmit = async(e)=>{
    e.preventDefault()
    const res = await fetch('http://localhost:8001/savedata',{
      method:'POST',
      body:JSON.stringify(data),
       headers: {
        "Content-Type": "application/json",
      },
    })
     const saveddata = await res.json()
      console.log(saveddata)

    if(res.ok){
      localStorage.setItem('token',saveddata.token)
      alert('signup succesfully')
      navigate('/')
    }
    else{
      alert('Email already registered')
      
    }

      
}

  return (
  <>
<div className="formcontainer">
  <form onSubmit={handlesubmit}>
    <div className="signupage">
      <div className="headtext">
        <h1>SignUp</h1><hr />
      </div>
      <div className="input">
        <label>EnterName:</label>
        <input onChange={handleform} type="text" name="name" placeholder='Enter your name' /><br /><br />


        <label>EnterEmail:</label>
        <input onChange={handleform} type="email" name="email" placeholder='Enter your Email' /><br /><br />

        
        <label>EnterPassword:</label>
        <input onChange={handleform} type="password" name="password" placeholder='Enter your Password' /><br /><br />
      </div>
      <button className='submitbtn' type="submit">SignUp</button><br /><br /><hr />
      

     <Link to='/Login'> <p className='par'>You are already signup ? </p></Link>
    </div>
</form>
</div>

  </>
  )
}

export default Singup
