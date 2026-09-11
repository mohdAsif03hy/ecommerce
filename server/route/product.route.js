import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import { createProduct, deleteProduct, getAllFeatureProduct, getAllProduct, getAllProductByPrice, getProduct, getProductByCatId, getProductByCatName, getProductByRating, getProductBySubCatId, getProductBySubCatName, getProductBythirdSubCatId, getProductBythirdSubCatName, getProductCount, removeImageFromCloudinary, updateProduct, uploadImages } from "../controllers/product.controller.js";




const ProductRouter = Router();

ProductRouter.post("/upload-images",auth,upload.array("images"),uploadImages);
ProductRouter.post("/create",auth,createProduct);
ProductRouter.get("/allproduct",getAllProduct);
ProductRouter.get("/get-productcatId/:id",getProductByCatId);
ProductRouter.get("/get-productcatIdName",getProductByCatName);
ProductRouter.get("/get-productsubcatId/:id",getProductBySubCatId);
ProductRouter.get("/get-productsubcatname",getProductBySubCatName);
ProductRouter.get("/get-productthirdsubcatid/:id",getProductBythirdSubCatId);
ProductRouter.get("/get-productthirdsubcatname",getProductBythirdSubCatName);
ProductRouter.get("/get-allProductByPrice",getAllProductByPrice);
ProductRouter.get("/get-allProductByRating",getProductByRating);
ProductRouter.get("/get-allProductCount",getProductCount);
ProductRouter.get("/get-allFeaturedProduct",getAllFeatureProduct);
ProductRouter.delete("/:id",deleteProduct);
ProductRouter.get("/:id",getProduct);
ProductRouter.delete("/deleteImage",auth,removeImageFromCloudinary);
ProductRouter.put("/updateProduct/:id",auth,updateProduct);











export default ProductRouter;
