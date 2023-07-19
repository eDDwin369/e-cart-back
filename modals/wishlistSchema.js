const mongoose=require('mongoose')
const wishlistSchema =mongoose.Schema({


    id: {
        type: Number,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true

    },
       image: {
        type: String,
        required: true
    }


})
//create model for collection
const wishlists = mongoose.model("wishlists", wishlistSchema)

//exports the model
module.exports = wishlists