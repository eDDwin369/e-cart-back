const products = require('../modals/productSchema')





exports.getallproducts = async (req, res) => {

  try {

    const allproducts = await products.find()
    res.status(200).json(allproducts)

  } catch (error) {
    res.status(401).json(error)
  }



}

exports.viewProduct=async(req,res)=>{

  
  
    let{id}=req.params
    try{
const product=await products.findOne({id})
res.status(200).json(product)



  }catch(error){
    res.status(401).json("product is not available")

  }

}