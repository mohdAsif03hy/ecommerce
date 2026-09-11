import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    images:[
        {
            type:String,
        }
    ],
    parentcatName:{
        tyep:String,
    },
    parentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        default:null
    }
},{ timestamps: true });

const categoryModel = mongoose.model('Category',categorySchema);
export default categoryModel;