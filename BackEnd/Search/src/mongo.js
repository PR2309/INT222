const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
// .then(()=>{
//     console.log('mongoose connected');
// })
// .catch((e)=>{
//     console.log('failed');
// })

mongoose.connect('mongodb+srv://MyReader:12345@cluster0.tha9omi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const booksSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
})

const books=new mongoose.model('books',booksSchema)
module.exports=books
