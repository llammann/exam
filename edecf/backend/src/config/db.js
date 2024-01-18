const mongoose = require('mongoose');

 mongoose.connect(process.env.MONGO_URI).then((res)=>{
     console.log("connected MongoDb")
 }).catch((err)=>{
     console.log(`failed ${err}`)
 })
