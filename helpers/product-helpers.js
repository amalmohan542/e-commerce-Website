var db=require('../config/connection')
var collection=require('../config/collections');
const { resolve, reject } = require('promise');
var objectId=require('mongodb').ObjectID
module.exports={
    addProduct:(product,callback)=>{
        console.log(product);
  
        db.get().collection('product').insertOne(product).then((data)=>{
            
        callback(data.ops[0]._id)   
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:objectId(proId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })

    },
    getProductDetails:(proid)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:objectId(proid)}).then((product)=>{
                resolve(product);
            })
        })
    },
    updateProduct:(proid,productDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION)
            .updateOne({_id:objectId(proid)},{
                $set:{
                    name:productDetails.name,
                    discription:productDetails.discription,
                    category:productDetails.category,
                    price:productDetails.price
                }
            }).then((response)=>{
                resolve()
            })
        }) 
    }
}