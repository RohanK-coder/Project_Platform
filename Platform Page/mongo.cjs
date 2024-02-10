const mongoose=require("mongoose")

mongoose.connect('mongodb+srv://srinaini:Srinaini2102@cluster0.zzv7oog.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err.message);
});


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
