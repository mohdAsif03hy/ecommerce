import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Provide name"],
        },

        email: {
            type: String,
            required: [true, "Provide email"],
            unique: true,
        },

        password: {
            type: String,
            required: [true, "Provide password"],
        },

        avatar: {
            type: String,
            default: null,
        },

        mobile: {
            type: String,
            default: null,
        },

        verify_email: {
            type: Boolean,
            default: false,
        },
        access_token: {
            type: String,
            default:""
        },
        refresh_token: {
            type: String,
            default: ""
        },
        last_login_date: {
            type: Date,
            default: null,
        },

        status: {
            type: String,
            enum: ["Active", "Inactive", "Suspended"],
            default: "Active",
        },

        address_detail: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "address",
            },
        ],

        shopping_cart: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "cartProduct",
            },
        ],

        orderHistory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "order",
            },
        ],

        otp: {
            type: String
        },
        otpExpires: {
            type: Date
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER",
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;