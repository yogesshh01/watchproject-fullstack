const express = require('express')
const cors = require('cors')
const app = express()
require('./config')
const User = require('./userdata')
const port = 8001
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const Order= require('./orders')


app.use(express.json())
app.use(cors())

const authmiddleware =(req,res,next)=>{
  const token = req.headers.authorization
  if(!token){
   return res.status(401).json({message: "No token provided"})
  }

  try{

const decoded = jwt.verify(token,'yoursecretkey')
req.userid = decoded.id
  req.user = decoded   //added 
next()
  }
  
  catch(error){
return res.status(401).json({message : "invalid token"})
  }

}

app.post('/Login', async(req,res)=>{
 try{

const {email,password}=req.body

const user = await User.findOne({email})
if(!user){
  return res.json({success:false, message:'email not found'})
}

const ismatch = await bcrypt.compare(password,user.password)
if(!ismatch){
 return res.json({success:false, message:'password not match'})
}

 const token = jwt.sign(
      { id: user._id },
      'yoursecretkey',
      { expiresIn: '1h' }
    )
return res.json({
      success: true,
      message: 'Login successful',
      token
    })

  
 }
 catch(err){
console.log(err,'server error')
 }
})

app.get('/profile', authmiddleware, (req,res)=>{     //protected route
  return res.json({message:"This is protected"})
})


app.post('/savedata',async(req,res)=>{
  try{

    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const userdata = new User()
    userdata.name = req.body.name
   userdata.email=req.body.email
   userdata.password = hashedPassword
    


    const data  = await userdata.save()
    console.log(data)
    res.status(201).json({message:'user created successfully'})
  }
  catch(error){
    console.error(error)
    res.status(500).json({message:'server error'})
  }
    
 
})


app.post("/fake-payment", async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;

    setTimeout(async () => {

      const newOrder = new Order({
        userId,
        products,
        totalAmount,
        paymentStatus: "SUCCESS"
      });

      await newOrder.save();

      res.json({
        success: true,
        message: "Payment Successful"
      });

    }, 2000);

  } catch (err) {
    res.status(500).json({ message: "Payment Failed" });
  }
})

app.get("/my-orders/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const orders = await Order.find({ userId });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" })
  }
})

app.listen(port,()=>{
    console.log(`server running successfully ${port}`)
})