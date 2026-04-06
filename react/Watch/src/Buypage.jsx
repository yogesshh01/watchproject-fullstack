import React from 'react'
import { useEffect,Navigate } from 'react'
import { useNavigate } from 'react-router-dom'
const Buypage = () => {
const navigate = useNavigate()

useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log(token,"token")
    if(!token){
        navigate('/Signup')
    }
},[navigate])
  return (
   <>
   <h1>Buy page</h1>
   </>
  )
}

export default Buypage
