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
        type:String
    },
    imageUrl:{
        type:String
    },
    sector:{
        type:String
    },
    keywords:{
        type:String
    },
    followedBy:{
        type:String
    },
    cc:{
        type:String
    },
    cd:{
        type:String
    },
    impact:{
        type:String
    },
    village:{
        type:String
    },reference:{
        type:String
    },express:{
        type:String
    },

})

const ProjectSchema=new mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    category:{
        type:String
    },
    type:{
        type:String
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    status:{
        type:String
    },
    content:{
        type:String
    }
})

const TechnologySchema=new mongoose.Schema({
    provider:{
        type:String
    },
    imageUrl:{
        type:String
    },
    location:{
        type:String
    },
    affiliated:{
        type:String
    },
    solutionType:{
        type:String
    },
    sector:{
        type:String
    },
    website:{
        type:String
    },
    projectLifeCycle:{
        type:String
    },
    generalDetails:{
        type:String
    },
    impact:{
        type:String
    },
    resources:{
        type:String
    },
    webArticles:{
        type:String
    }
})


const collection = mongoose.model("collection",loginSchema)
const GC = mongoose.model("GC", GCSchema)
const Project = mongoose.model("Project", ProjectSchema)
const Technology = mongoose.model("Technology", TechnologySchema)

module.exports = {
    collection: collection,
    GC: GC,
    Project: Project,
    Technology: Technology
};
