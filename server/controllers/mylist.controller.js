import MyListModel from "../models/myList.model.js"





export const addToMyListController = async (req, res) => {
    try {
        const userId = req.userId;

        const {
            productId,
            productTitle,
            image,
            rating,
            price,
            oldPrice,
            brand,
            discount
        } = req.body;

        const item = await MyListModel.findOne({
            userId: userId,
            productId: productId
        });

        if (item) {
            return res.status(200).json({
                message: "product already in my List",
                error: false,
                success: true
            });
        }

        const MyList = new MyListModel({
            productId: productId,
            productTitle: productTitle,
            image: image,
            rating: rating,
            price: price,
            oldPrice: oldPrice,
            brand: brand,
            discount: discount,
            userId: userId
        });

        await MyList.save();

        return res.status(200).json({
            message: "product saved in my List Successfully",
            error: false,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};


export const deleteToMyListController = async (req, res) => {
    try {
        const myListitem = await MyListModel.findById(req.params.id);
        if (!myListitem) {
            return res.status(404).json({
                message: "product not found in my List",
                error: true,
                success: false
            });
        }
        const deletedItem = await MyListModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "product deleted from my List Successfully",
            error: false,
            success: true
        });
        

    }catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}


export const getMyListController = async (req, res) => {
    try {
        const userId = req.userId; 
        const myListitems = await MyListModel.find({ userId: userId });
        if (!myListitems || myListitems.length === 0) {
            return res.status(404).json({
                message: "No products found in my List",   
            error: true,
            success: false
            });
        }
        return res.status(200).json({
            message: "My List retrieved successfully",
            error: false,
            success: true,
            data: myListitems
        });

    }catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export const updateMyListController = async (req, res) => {
    try {
        const myListitem = await MyListModel.findById(req.params.id);
        if (!myListitem) {
            return res.status(404).json({
                message: "product not found in my List",
                error: true,
                success: false
            });
        }

        const updatedItem = await MyListModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({
            message: "product updated in my List Successfully",
            error: false,
            success: true,
            data: updatedItem
        });
    }catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}