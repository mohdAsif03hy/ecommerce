import { Router } from "express";
import auth from "../middlewares/auth.js";
import { addToMyListController, deleteToMyListController, getMyListController, updateMyListController } from "../controllers/mylist.controller.js";



const MyListRouter = Router();

MyListRouter.post("/add", auth, addToMyListController);
MyListRouter.delete("/delete/:id", auth, deleteToMyListController);
MyListRouter.get("/get", auth, getMyListController);
MyListRouter.put("/update/:id", auth, updateMyListController);

export default MyListRouter;