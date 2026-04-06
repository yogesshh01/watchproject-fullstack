import React from 'react'
import './Signup.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Login = () => {
  
const navigate = useNavigate()

const[data,setdata]=useState({
  email:'',
  password:'',
})
  
const handleform =(e)=>{
  setdata({
    ...data,
    [e.target.name]:e.target.value
  })
}
  
  const handlelogin=async(e)=>{
 e.preventDefault()
  try{
 
const res = await fetch('http://localhost:8001/login',{
  method:'POST',
  body:JSON.stringify(data),
  headers:{
    'content-type':'application/json'
  },


})

   const datasaved = await res.json()
    console.log(datasaved)

    if(datasaved.success){
  

    localStorage.setItem('token', datasaved.token)
    alert(datasaved.message)
    navigate('/')
    }else{
      alert(datasaved.message)
    }
  }catch(err){
console.error(err,'Login error')
  }
  }
  
  return (
    <>
    <div className="formcontainer">
  <form onSubmit={handlelogin}>
    <div className="signupage">
      <div className="headtext">
        <h1>Login</h1><hr />
      </div>
      <div className="input">
       


        <label>EnterEmail:</label>
        <input onChange={handleform}  type="email" name="email" placeholder='Enter your Email' /><br /><br />

        
        <label>EnterPassword:</label>
        <input onChange={handleform} type="password" name="password" placeholder='Enter your Password' /><br /><br />
      </div>
      <button type="submit">Login</button><br /><br /><hr />
      <Link to='/Signup'>Signup?</Link>
      
      

      
    </div>
</form>
</div>
    </>
  )
}

export default Login
