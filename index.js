const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 8000;

app.get('/api/v1/', (req,res)=> {
   res.status(200).json({message:"Working..."})
})




app.listen(PORT , ()=> console.log(`Server Running at http://localhost:${PORT}`))
