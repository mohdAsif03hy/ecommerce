import express, { response } from "express";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from "helmet"
import connectDb from "./config/connectDB.js";
import userRouter from "./route/user.route.js";
import categoryRouter from "./route/category.route.js";
import ProductRouter from "./route/product.route.js";
import cartRouter from "./route/cart.route.js";
import MyListRouter from "./route/mylist.route.js";






const app = express();
app.use(cors());
app.options('/{*splat}', cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    crossOriginEmbedderPolicy:false
}))


app.get("/",(req,res)=>{
    res.json({
        message:"server is running " + process.env.PORT
    })
})

app.use("/api/user",userRouter);
app.use("/api/category",categoryRouter);
app.use("/api/product",ProductRouter);
app.use("/api/cart",cartRouter);
app.use("/api/myList",MyListRouter);













connectDb().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running on " + process.env.PORT);
    })
})

