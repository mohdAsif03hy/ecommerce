import ProductModel from "../models/product.model.js"
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

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

//create product 
export async function createProduct(req, res) {
    try {
        const {
            name,
            description,
            images,
            brand,
            price,
            oldPrice,
            catName,
            catId,
            subCatId,
            subCat,
            thirdSubCat,
            thirdSubCatId,
            category,
            countInStock,
            rating,
            isFeatured,
            discount,
            productRam,
            size,
            productWeight,
            dateCreated
        } = req.body;
        const product = new ProductModel({
            name: req.body.name,
            description: req.body.description,
            images: imagesArr,
            brand: req.body.brand,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
            catName: req.body.catName,
            catId: req.body.catId,
            subCatId: req.body.subCatId,
            subCat: req.body.subCat,
            thirdSubCat: req.body.thirdSubCat,
            thirdSubCatId: req.body.thirdSubCatId,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            isFeatured: req.body.isFeatured,
            discount: req.body.discount,
            productRam: req.body.productRam,
            size: req.body.size,
            productWeight: req.body.productWeight,
            dateCreated: req.body.dateCreated
        });
        if (!name || !description || !price ||
            !oldPrice || !category || countInStock === undefined ||
            discount === undefined) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Please provide all required fields"
            });
        }
        await product.save();

        if (!product) {
            return res.status(500).json({
                message: "Product not created",
                error: true,
                success: false
            });
        }
        imagesArr = [];
        res.status(200).json({
            error: false,
            success: true,
            message: "Product created successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


//get all produt 
export async function getAllProduct(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        if (page < 1 || perPage < 1) {
            return res.status(400).json({
                message: "Invalid page or perPage",
                error: true,
                success: false
            });
        }

        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }

        const product = await ProductModel.find()
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();

        if (product.length === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            error: false,
            success: true,
            totalPages: totalPages,
            products: product,
            page: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

//get product by category id 

export async function getProductByCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        if (page < 1 || perPage < 1) {
            return res.status(400).json({
                message: "Invalid page or perPage",
                error: true,
                success: false
            });
        }

        const totalPosts = await ProductModel.countDocuments({
            catId: req.params.id
        });

        const totalPages = Math.ceil(totalPosts / perPage);



        const product = await ProductModel.find({
            catId: req.params.id
        })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();

        if (product.length === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }
        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            error: false,
            success: true,
            totalPages: totalPages,
            products: product,
            page: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

// get product by category name
export async function getProductByCatName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        if (page < 1 || perPage < 1) {
            return res.status(400).json({
                message: "Invalid page or perPage",
                error: true,
                success: false
            });
        }
        console.log(req.query.catName);
        const totalPosts = await ProductModel.countDocuments({
            catName: req.query.catName
        });

        const totalPages = Math.ceil(totalPosts / perPage);



        const product = await ProductModel.find({
            catName: req.query.catName
        })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();

        if (product.length === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }
        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            error: false,
            success: true,
            totalPages: totalPages,
            products: product,
            page: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

//get product by subcategory id 
export async function getProductBySubCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        if (page < 1 || perPage < 1) {
            return res.status(400).json({
                message: "Invalid page or perPage",
                error: true,
                success: false
            });
        }

        const totalPosts = await ProductModel.countDocuments({
            subCatId: req.params.id
        });

        const totalPages = Math.ceil(totalPosts / perPage);



        const product = await ProductModel.find({
            subCatId: req.params.id
        })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();

        if (product.length === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }
        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        return res.status(200).json({
            error: false,
            success: true,
            totalPages: totalPages,
            products: product,
            page: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

// get product by subcategory name
export async function getProductBySubCatName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        if (page < 1 || perPage < 1) {
            return res.status(400).json({
                message: "Invalid page or perPage",
                error: true,
                success: false
            });
        }
        // console.log(req.query.catName);
        const totalPosts = await ProductModel.countDocuments({
            subCat: req.query.subCat
        });

        const totalPages = Math.ceil(totalPosts / perPage);



        const product = await ProductModel.find({
            subCat: req.query.subCat
        })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();

        if (product.length === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }
        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            error: false,
            success: true,
            totalPages: totalPages,
            products: product,
            page: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


// get product by thirdsubcategory id
export async function getProductBythirdSubCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        if (page < 1 || perPage < 1) {
            return res.status(400).json({
                message: "Invalid page or perPage",
                error: true,
                success: false
            });
        }

        const totalPosts = await ProductModel.countDocuments({
            thirdSubCatId: req.params.id
        });

        const totalPages = Math.ceil(totalPosts / perPage);



        const product = await ProductModel.find({
            thirdSubCatId: req.params.id
        })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();

        if (product.length === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }
        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            error: false,
            success: true,
            totalPages: totalPages,
            products: product,
            page: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

// get product by subcategory name
export async function getProductBythirdSubCatName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        if (page < 1 || perPage < 1) {
            return res.status(400).json({
                message: "Invalid page or perPage",
                error: true,
                success: false
            });
        }
        const totalPosts = await ProductModel.countDocuments({
            thirdSubCat: req.query.thirdSubCat
        });

        const totalPages = Math.ceil(totalPosts / perPage);


        const product = await ProductModel.find({
            thirdSubCat: req.query.thirdSubCat
        })
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();

        if (product.length === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }


        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        return res.status(200).json({
            error: false,
            success: true,
            totalPages: totalPages,
            products: product,
            page: page
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


// get all product by price 
export async function getAllProductByPrice(req, res) {
    try {
        let productList = [];
        if (req.query.catId !== "" && req.query.catId !== undefined) {
            const productListArr = await ProductModel.find({
                catId: req.query.catId
            }).populate("category");
            productList = productListArr;
        } else if (req.query.subCatId !== "" && req.query.subCatId !== undefined) {
            const productListArr = await ProductModel.find({
                subCatId: req.query.subCatId
            }).populate("category");
            productList = productListArr;
        } else if (
            req.query.thirdSubCatId !== "" &&
            req.query.thirdSubCatId !== undefined
        ) {
            const productListArr = await ProductModel.find({
                thirdSubCatId: req.query.thirdSubCatId
            }).populate("category");

            productList = productListArr;

        }
        const filteredProducts = productList.filter((product) => {
            if (
                req.query.minPrice &&
                product.price < parseInt(req.query.minPrice)
            ) {
                return false;
            }
            if (
                req.query.maxPrice &&
                product.price > parseInt(req.query.maxPrice)
            ) {
                return false;
            }
            return true;
        });
        return res.status(200).json({
            error: false,
            success: true,
            products: filteredProducts
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

// get all product by rating
export async function getProductByRating(req, res) {

    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;

        if (page < 1 || perPage < 1) {
            return res.status(400).json({
                message: "Invalid page or perPage",
                error: true,
                success: false
            });
        }

        const filter = {};

        // =========================
        // RATING FILTER
        // =========================
        if (req.query.rating !== undefined) {
            const rating = Number(req.query.rating);

            if (isNaN(rating)) {
                return res.status(400).json({
                    message: "Invalid rating",
                    error: true,
                    success: false
                });
            }

            filter.rating = {
                $gte: rating
            };
        }

        // =========================
        // CATEGORY FILTER
        // =========================
        if (req.query.catId !== undefined) {
            filter.catId = req.query.catId;
        }

        // =========================
        // SUB CATEGORY FILTER
        // =========================
        if (req.query.subCatId !== undefined) {
            filter.subCatId = req.query.subCatId;
        }

        // =========================
        // THIRD SUB CATEGORY FILTER
        // =========================
        if (req.query.thirdSubCatId !== undefined) {
            filter.thirdSubCatId = req.query.thirdSubCatId;
        }



        // =========================
        // COUNT
        // =========================
        const totalProducts = await ProductModel.countDocuments(filter);


        if (totalProducts === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }

        // =========================
        // TOTAL PAGES
        // =========================
        const totalPages = Math.ceil(totalProducts / perPage);

        if (page > totalPages) {
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }

        // =========================
        // GET PRODUCTS
        // =========================
        const products = await ProductModel.find(filter)
            .populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();

        return res.status(200).json({
            error: false,
            success: true,
            message: "Products fetched successfully",
            totalProducts: totalProducts,
            totalPages: totalPages,
            page: page,
            perPage: perPage,
            products: products
        });

    } catch (error) {
        console.error("Get Product By Rating Error:", error);

        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

//get all product count
export async function getProductCount(req, res) {
    try {
        const productCount = await ProductModel.countDocuments();
        if (!productCount) {
            return res.status(500).json({
                message: error.message || "Something went wrong",
                error: true,
                success: false
            });
        }
        return res.status(200).json({
            productCount: productCount,
            error: false,
            success: true
        });


    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


//get all featured profuct

export async function getAllFeatureProduct(req, res) {
    try {
        const product = await ProductModel.find({
            isFeatured: true
        }).populate("category");


        if (product.length === 0) {
            return res.status(404).json({
                message: "Products not found",
                error: true,
                success: false
            });
        }
        return res.status(200).json({
            error: false,
            success: true,
            product: product
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}



// delete product
export async function deleteProduct(req, res) {
    try {
        const id = req.params.id;
        // Check valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid product ID",
                error: true,
                success: false
            });
        }

        const product = await ProductModel.findById(id);

        console.log("PRODUCT:", product);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        // Delete images from Cloudinary
        const images = product.images || [];

        for (const img of images) {
            const urlArr = img.split("/");
            const image = urlArr[urlArr.length - 1];
            const imageName = image.split(".")[0];

            if (imageName) {
                cloudinary.uploader.destroy(imageName, (error, result) => {
                    console.log("Cloudinary:", error, result);
                });
            }
        }

        // Delete product
        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not deleted",
                error: true,
                success: false
            });
        }
        return res.status(200).json({
            message: "Product deleted successfully",
            error: false,
            success: true
        });

    } catch (error) {
        console.error("DELETE ERROR:", error);

        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

// get single product by id 

export async function getProduct(req, res) {
    try {
        const product = await ProductModel.findById(req.params.id).populate("category");
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            product: product,
            error: false,
            success: true
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
        // console.log("Delete error:", error);
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

// update product
export async function updateProduct(req, res) {
    try {
        const product = await ProductModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    name: req.body.name,
                    description: req.body.description,
                    brand: req.body.brand,
                    images: req.body.images,
                    price: req.body.price,
                    oldPrice: req.body.oldPrice,
                    catName: req.body.catName,
                    catId: req.body.catId,
                    subCatId: req.body.subCatId,
                    subCat: req.body.subCat,
                    thirdSubCat: req.body.thirdSubCat,
                    thirdSubCatId: req.body.thirdSubCatId,
                    category: req.body.category,
                    countInStock: req.body.countInStock,
                    rating: req.body.rating,
                    isFeatured: req.body.isFeatured,
                    discount: req.body.discount,
                    productRam: req.body.productRam,
                    size: req.body.size,
                    productWeight: req.body.productWeight
                }
            },
            {
                new: true,
                runValidators: true
            }
        );
        if (!product) {
            return res.status(404).json({
                message: "product not found",
                error: true,
                success: false
            });
        }
        imagesArr = [];
        return res.status(200).json({
            message: "Product updated successfully",
            error: false,
            success: true,
            product: product
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

