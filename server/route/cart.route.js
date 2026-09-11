import { Router } from "express";
import auth from "../middlewares/auth.js";
import { addToCartitemController,deleteCartItemController, getCartItemController, updateCartItemQuantityController } from "../controllers/cart.controller.js";



const cartRouter = Router();
cartRouter.post("/add",auth,addToCartitemController);
cartRouter.get("/get",auth,getCartItemController);
cartRouter.put("/update",auth,updateCartItemQuantityController);
cartRouter.delete("/delete",auth,deleteCartItemController);

export default cartRouter;