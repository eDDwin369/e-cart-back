const wishlists = require('../modals/wishlistSchema')


exports.wishlists = async (req, res) => {
    const { id, title, price,image } = req.body
    try {
        const product = await wishlists.findOne({ id })
        if (product) {
            res.status(406).json("Product already exists")
        } else {
            const newProduct = new wishlists({ id, title, image, price })
            await newProduct.save()
            res.status(200).json(newProduct)
        }


    } catch (error) {
        res.status(401).json(error)
    }

}


exports.getallProducts = async (req, res) => {

    try {

        const allproducts = await wishlists.find()
        res.status(200).json(allproducts)

    } catch (error) {
        res.status(401).json(error)
    }
}


exports.removeItem = async (req, res) => {

    const {id} = req.params
    try {
        await wishlists.deleteOne({id})
        const allItems = await wishlists.find()
        res.status(200).json(allItems)

    }
    catch (error) {
        res.status(401).json(error)

    }




}
