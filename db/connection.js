//import mongoose
const mongoose=require('mongoose')
//get connection string
const DB=process.env.DATABASE

//connecet mongodbatlas
mongoose.connect(DB,{
    useUnifiedtopology:true,
    useNewUrlParser:true

}).then(()=>{
    console.log("mongodb atlas connecetd successfully");
}).catch((error)=>{
    console.log("error is",error);
})