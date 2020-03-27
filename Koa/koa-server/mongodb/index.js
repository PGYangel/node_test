const dburl = require('../public/config').connections.mongodb,
    MongoClient = require('mongodb').MongoClient;

module.exports = {
    //collection:集合名
    connect: (collection = '') => {
        return new Promise((resolve, reject) => {
            let url = dburl + collection
            MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true },(err,db)=>{
                if (err){
                    reject(err)
                }else{
                    resolve(db)
                }
            })
        })
    }
}
