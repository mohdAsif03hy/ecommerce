
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import categoryModel from "../models/category.model.js";

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
    secure: true
});



//upload photo of category
var imagesArr = [];

export async function uploadImages(req, res) {
    try {
        imagesArr = [];
        const images = req.files;
        // Check uploaded image
        if (!images || images.length === 0) {
            return res.status(400).json({
                message: "Please upload an image",
                error: true,
                success: false
            });
        }

        /*
         * Upload new image first.
         * This is safer because if the new upload fails,
         * the old avatar is still available.
         */
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: false
        };

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.uploader.upload(
                images[i].path,
                options
            );
            imagesArr.push(result.secure_url);
            // Delete image from local uploads folder
            await fs.promises.unlink(images[i].path);
        }




        return res.status(200).json({
            // category: category,
            images: imagesArr,
            message: "images uploaded successfully",
            success: true,
            error: false
        });

    } catch (error) {
        console.error("images upload error:", error);

        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


// create category 
export async function createCategory(req, res) {
    try {
        let category = new categoryModel({
            name: req.body.name,
            images: imagesArr,
            parentId: req.body.parentId,
            parentCatName: req.body.parentCatName,
        })

        if (!category) {
            return res.status(500).json({
                message: "Category not created",
                success: false,
                error: true
            });
        }
        category = await category.save();
        imagesArr = [];
        res.status(200).json({
            message: "Category created",
            error: false,
            success: true,
            category: category
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

// Get categories
export async function getCategories(req, res) {
    try {
        const categories = await categoryModel.find().lean();

        const categoryMap = {};
        const rootCategories = [];

        // Create map
        categories.forEach((cat) => {
            categoryMap[cat._id.toString()] = {
                ...cat,
                children: []
            };
        });

        // Build hierarchy
        categories.forEach((cat) => {
            if (cat.parentId) {
                const parent = categoryMap[cat.parentId.toString()];

                if (parent) {
                    parent.children.push(
                        categoryMap[cat._id.toString()]
                    );
                } else {
                    // Parent doesn't exist
                    rootCategories.push(
                        categoryMap[cat._id.toString()]
                    );
                }
            } else {
                rootCategories.push(
                    categoryMap[cat._id.toString()]
                );
            }
        });

        return res.status(200).json({
            error: false,
            success: true,
            data: rootCategories
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


//get ctegory cound 
export async function getCategoriesCout(req, res) {
    try {
        const categoryCount = await categoryModel.countDocuments({ parentId: undefined });
        if (!categoryCount) {
            return res.status(500).json({
                error: true,
                success: false
            });
        } else {
            res.send({
                categoryCount: categoryCount,
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


//get sub category count
export async function getSubCategoriesCout(req, res) {
    try {
        const categories = await categoryModel.find();
        if (!categories) {
            return res.status(500).json({
                error: true,
                success: false
            });
        }

        const subCategoryArr = [];
        for (let cat of categories) {
            if (cat.parentId !== undefined) {
                subCategoryArr.push(cat);
            }
        }
        res.send({
            subCategoryCount: subCategoryArr.length,
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

//get signle category by id 
export async function getCategoryById(req, res) {
    try {
        const category = await categoryModel.findById(req.params.id);
        if (!category) {
            res.status(500).json({
                message: "The category with the given ID was not found",
                error: true,
                success: false
            });
        }
        return res.status(200).json({
            error: false,
            success: true,
            category: category
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


//remove image 
export async function removeImageFromCloudinary(req, res) {
    try {
        const imgUrl = req.query.img;
        if (!imgUrl) {
            return res.status(400).json({
                message: "Image URL is required"
            });
        }
        const urlArr = imgUrl.split("/");
        const image = urlArr[urlArr.length - 1];
        const imageName = image.substring(
            0,
            image.lastIndexOf(".")
        );
        // console.log("Public ID:", imageName);
        const response = await cloudinary.uploader.destroy(imageName);
        // console.log("Cloudinary response:", response);
        return res.status(200).json(response);
    } catch (error) {
        console.log("Delete error:", error);
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}


//delete category
export async function deleteCategory(req, res) {
    try {
        const category = await categoryModel.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                message: "category not found",
                error: true,
                success: false
            });
        }

        const images = category.images || [];

        // Delete category images from Cloudinary
        for (let img of images) {
            const imgUrl = img;
            const UrlArr = imgUrl.split("/");
            const image = UrlArr[UrlArr.length - 1];
            const imageName = image.split(".")[0];

            if (imageName) {
                cloudinary.uploader.destroy(imageName, (error, result) => {
                    console.log(error, result);
                });
            }

            // console.log(imageName);
        }

        // Find sub categories
        const subCategory = await categoryModel.find({
            parentId: req.params.id
        });

        // Delete sub categories and their third level categories
        for (let i = 0; i < subCategory.length; i++) {

            // console.log(subCategory[i]._id);

            const thirdSubcategory = await categoryModel.find({
                parentId: subCategory[i]._id
            });

            // Delete third level categories
            for (let j = 0; j < thirdSubcategory.length; j++) {

                // console.log(thirdSubcategory[j]._id);

                await categoryModel.findByIdAndDelete(
                    thirdSubcategory[j]._id
                );
            }

            // Delete sub category
            await categoryModel.findByIdAndDelete(
                subCategory[i]._id
            );
        }

        // Delete main category
        const deletedCat = await categoryModel.findByIdAndDelete(
            req.params.id
        );

        if (!deletedCat) {
            return res.status(404).json({
                message: "category not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            success: true,
            error: false,
            message: "category deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || error
        });
    }
}

//update category 

export async function updateaCategory(req, res) {
    try {

        const category = await categoryModel.findByIdAndUpdate(
            req.params.id, {
            name: req.body.name,
            images: imagesArr.length > 0 ? imagesArr[0] : req.body.images,
            parentId: req.body.parentCatName,
        },
            { new: true }
        );

        if (!category) {
            return res.status(500).json({
                message: "Category can not be updated",
                error: true,
                success: false
            });
        }

        imagesArr = [];
        res.status(200).json({
            success: true,
            error: false,
            category: category,
            message: "category updated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || error
        });
    }
}