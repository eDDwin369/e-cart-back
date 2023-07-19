const carts = require('../modals/cartSchema')



exports.carts = async (req, res) => {
    const { id, title, price, image, quantity } = req.body
    try {
        const product = await carts.findOne({ id })
        if (product) {
            //if yes then incre quantity
            product.quantity += 1
            product.grandTotal = product.quantity * product.price
            await product.save()
            res.status(200).json("products added successfully")
        } else {
            const newProduct = new carts({ id, title, price, image, quantity, grandTotal: price * quantity })
            await newProduct.save()
            res.status(200).json("product added ")
        }


    } catch (error) {
        res.status(401).json(error)
    }
}




exports.getCart = async (req, res) => {

    try {
        const items = await carts.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(401).json(error)

    }

}


exports.removeCart = async (req, res) => {
    const { id } = req.params
    try {
        await carts.deleteOne({ id })
        const allitems = await carts.find()
        res.status(200).json(allitems)

    } catch (error) {
        res.status(401).json(error)
    }
}


exports.incrementItem = async (req, res) => {
    const { id } = req.params

    try {
        const product = await carts.findOne({ id })
        if (product) {
            product.quantity += 1
            product.grandTotal = product.quantity * product.price
            await product.save()
            const allItems = await carts.find()
            res.status(200).json(allItems)
        }
        else {
            res.status(404).json("item not found")
        }




    } catch (error) {
        res.status(401).json(error)

    }


}

exports.decrementItem = async (req, res) => {
    const { id } = req.params

    try {
        const product = await carts.findOne({ id })
        if (product) {
            product.quantity -= 1
            if (product.quantity == 0) {
                await carts.deleteOne(id)
                const allItems = await carts.find()
                res.status(200).json(allItems)
           }
            product.grandTotal = product.quantity * product.price
            await product.save()
            const allItems = await carts.find()
            res.status(200).json(allItems)
        }
        else {
            res.status(404).json("item not found")
        }




    } catch (error) {
        res.status(401).json(error)

    }


}

exports.emptyCart=async (req,res)=>{
    try {
        await carts.deleteMany({})
        const allItems=carts.find()
        res.status(200).json(allItems)
        
    } catch (error) {
        console.log(error);
        
    }
}

