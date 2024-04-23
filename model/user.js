const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   username:{
      type:String,
      required:true,
   },
   email:{
      type:String,
      required:true,
      unique:true
   },
   password:{
      type:String,
      required:true,
   },
   dob:{
      type:String,
      required:true,
   },
   gender:{
      type:String,
      required:true
   },
   createdAt:{
      type:Date,
      required:true,
      default:Date.now()
   },
   role:{
      type:String,
      required:true,
      default:'user',
   }

})

module.exports = mongoose.model('user',userSchema);   
