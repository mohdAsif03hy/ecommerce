import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import { createCategory, deleteCategory, getCategories, getCategoriesCout, getCategoryById, getSubCategoriesCout, removeImageFromCloudinary, updateaCategory, uploadImages } from "../controllers/category.controller.js";






const categoryRouter = Router();
categoryRouter.post("/upload-images",auth,upload.array("images"),uploadImages);
categoryRouter.post("/create",auth,createCategory);
categoryRouter.get("/get",getCategories);
categoryRouter.get("/get-count",getCategoriesCout);
categoryRouter.get("/get-count/subCat",getSubCategoriesCout);
categoryRouter.get("/:id",getCategoryById);
categoryRouter.delete("/deleteImage",auth,removeImageFromCloudinary);
categoryRouter.delete("/:id",auth,deleteCategory);
categoryRouter.put("/:id",auth,updateaCategory);





export default categoryRouter;