const mongoose=require("mongoose")

mongoose.connect('mongodb+srv://Srinaini:srinaini2021@cluster0.wxkfolf.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err.message);
});


const loginSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const GCSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
})


const collection = mongoose.model("collection",loginSchema)
const GC = mongoose.model("GC", GCSchema)

module.exports=collection
module.exports=GC
