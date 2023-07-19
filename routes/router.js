//import express
const express=require('express')
const productController=require('../controller/productController')
const wishlistController=require('../controller/wishlistController')
const cartController=require('../controller/cartController')


const router=new express.Router()

router.get('/products/get-all-products',productController.getallproducts)

router.get(`/products/view/:id`,productController.viewProduct)

router.post(`/wishlists/add-product`,wishlistController.wishlists)

router.get(`/wishlists/all-product`,wishlistController.getallProducts)

router.delete(`/wishlists/remove-item/:id`,wishlistController.removeItem)

router.post(`/carts/add-product`,cartController.carts)

router.get(`/carts/items`,cartController.getCart)

router.delete(`/carts/remove/:id`,cartController.removeCart)

router.get(`/carts/incre/:id`,cartController.incrementItem)

router.get(`/carts/decre/:id`,cartController.decrementItem)

router.get(`/carts/empty`,cartController.emptyCart)


module.exports=router