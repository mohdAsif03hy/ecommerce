import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    images: [
        {
            type: String,
            required: true
        }
    ],

    brand: {
        type: String,
        default: ""
    },

    price: {
        type: Number,
        required: true
    },

    oldPrice: {
        type: Number,
        required: true
    },
    catName:{
        type:String,
        required:true
    },

    catId: {
        type: String,
        default: ""
    },

    subCatId: {
        type: String,
        default: ""
    },

    subCat: {
        type: String,
        default: ""
    },


    thirdSubCat: {
        type: String,
        default: ""
    },

    thirdSubCatId: {
        type: String,
        default: ""
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    countInStock: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        default: 0
    },

    isFeatured: {
        type: Boolean,
        default: false
    },

    discount: {
        type: Number,
        required: true
    },

    productRam: {
        type: String,
        default: null
    },

    size: {
        type: String,
        default: null
    },

    productWeight: {
        type: String,
        default: null
    },

    dateCreated: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });


const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;