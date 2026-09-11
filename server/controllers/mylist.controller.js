import MyListModel from "../models/myList.model.js"






export const addToMyListController = async (req, res) => {
    try {
        const userId = req.userId;
        const {
            productId,
            procutTitle,
            image,
            rating,
            price,
            oldPrice,
            brand,
            discount } = req.body;
        const item = await MyListModel.findByOne({
            userId: userId,
            productId: productId
        });

        if (item) {
            return res.status(200).json({
                message: "product already in my List"
            })
        }

        const MyList = new MyListModel({
            productId: productId,
            procutTitle: procutTitle,
            image: image,
            rating: rating,
            price: price,
            oldPrice: oldPrice,
            brand: brand,
            discount: discount,
            userId:userId
        });
        const save = await MyList.save();
        return res.status(200).json({
            message: "product saved in my List Successfully",
            error: false,
            sucess: true
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            sucess: false
        })
    }
}