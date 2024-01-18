const Product=require("./../models/ProductModel")

const getAllProducts=async(req,res)=>{
    const allProducts= await Product.find({})
    res.send(allProducts)
    console.log("GET")
}


const deleteProduct=async(req,res)=>{
   const _id=req.params._id
   await Product.findByIdAndDelete(_id)
    console.log("DELETE")
}

const postProduct=async(req,res)=>{
    const newProduct= new Product(req.body)
    newProduct.save()
     console.log("POST")
 }


module.exports={getAllProducts,deleteProduct,postProduct}