import CartProductModel from "../models/cartproduct.model.js"
import UserModel from "../models/user.model.js"
import mongoose from "mongoose";


//add to cart
export async function addToCartitemController(req, res) {
    try {
        const userId = req.userId;
        const { productId } = req.body;

        if (!productId) {
            return res.status(404).json({
                message: "provide product ID",
                error: true,
                success: false
            })
        }
        const checkItemCart = await CartProductModel.findOne({
            userId: userId,
            productId: productId
        });
        if (checkItemCart) {
            return res.status(400).json({
                message: "item already in cart",
            })
        }

        const cartItem = new CartProductModel({
            quantity: 1,
            userId: userId,
            productId: productId
        })
        const save = await cartItem.save();

        const updateCartUser = await UserModel.updateOne({
            _id: userId
        }, {
            $push: {
                shopping_cart: productId
            }
        })


        return res.json(200).json({
            data: save,
            success: true,
            message: "Item add successfully",
            error: false
        });


    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

//get cart item 
export async function getCartItemController(req, res) {
    try {
        const userId = req.userId;
        const cartItem = await CartProductModel.find({
            userId: userId,
        }).populate("productId");
        return res.status(200).json({
            data: cartItem,
            success: true,
            error: false
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


//update cart item quantity

export async function updateCartItemQuantityController(req, res) {
    try {
        const userId = req.userId;
        const { _id, quantity } = req.body;

        if (!_id || !quantity) {
            return res.status(400).json({
                message: "provide ID and Quantity"
            })
        }

        const updatedCartItem = await CartProductModel.updateOne({
            _id: _id,
            userId: userId
        }, {
            quantity: quantity
        });
        return res.status(200).json({
            data: updatedCartItem,
            message: "update cart successfully",
            success: true,
            error: false
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}



//deletecart item controller
export async function deleteCartItemController(req, res) {
    try {
        const userId = req.userId;
        const { _id, productId } = req.body;

        if (!_id || !productId) {
            return res.status(400).json({
                message: "Please provide ID and product ID",
                success: false,
                error: true
            });
        }

        // Delete cart item
        const deleteCartItem = await CartProductModel.deleteOne({
            _id: _id,
            userId: userId
        });

        // Check whether anything was actually deleted
        if (deleteCartItem.deletedCount === 0) {
            return res.status(404).json({
                message: "Product is not in the cart",
                success: false,
                error: true
            });
        }

        // Find user
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
                error: true
            });
        }

        // Remove productId from shopping_cart
        user.shopping_cart = user.shopping_cart.filter(
            id => id.toString() !== productId.toString()
        );

        await user.save();

        return res.status(200).json({
            message: "Deleted successfully",
            success: true,
            error: false
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}