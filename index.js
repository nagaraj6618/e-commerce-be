const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./route/user.js')
const PORT = process.env.PORT || 8000;
dotenv.config();
const corsOption = {
   origin:true,
   credential:true,
}

//DB Connection

let isDBConnected = false;
const connectDb = async()=> {
   try{
      await mongoose.connect(process.env.MONGODB_URL)
      console.log('DB Connected');
      isDBConnected = true;
   }
   catch(err){
      isDBConnected = false;
   }
}

//middlewares
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connectDb()


//Get method for checking the status of the server
app.get('/api/v1/', (req,res)=> {
   res.status(200).json({message:"Working...",db:isDBConnected});
})

//routers
app.use('/api/v1/auth',userRouter);



app.listen(PORT , ()=> console.log(`Server Running at http://localhost:${PORT}`))
