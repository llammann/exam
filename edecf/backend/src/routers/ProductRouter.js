const router = require('express').Router()
const ProductControllers=require("./../controllers/ProductControllers")

router.get("/products",ProductControllers.getAllProducts)
router.delete("/products/:_id",ProductControllers.deleteProduct)
router.post("/products",ProductControllers.postProduct)

module.exports=router