const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim:true,
    required: true
  },
  email: {
    type: String,
    trim:true,
    required: true
  },
  password: {
    type: String,
    trim:true,
    required: true
  },
  firstName:{
    type:String,
    trim:true,
    
},
lastName:{
    type:String,
    trim:true,
    
},
dob:{
    type:Date,
    trim:true,
    
},
collageName:{
    type:String,
    trim:true,
    
},
gradYear:{
    type: String,
    trim:true,
    
},
gender:{
    type:String,
    trim:true,
    
},
mobileNo:{
    type:Number,
    trim:true,
    
},
interests:{
  type: [String],
  trim:true
}
});
module.exports = User = mongoose.model("users", UserSchema);
