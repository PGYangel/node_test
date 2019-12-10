// db.version()

// db.mytable1.insert({
//     title: 'MongoDB 教程', 
//     description: 'MongoDB 是一个 Nosql 数据库',
//     by: 'w3cschool',
//     url: 'http://www.w3cschool.cn',
//     tags: ['mongodb', 'database', 'NoSQL'],
//     likes: 100
//     })
// db.mytable1.find()

// db.mytable1.update(
// {"_id":ObjectId("5d639bdc904e0fe88c54c981")},
// {"name":"jone2"},
// false,
// false)

// db.mytable1.remove(
//     {"title":"MongoDB 教程"}
// )

// db.mytable1.remove(
//     {"name":"remove1"},
//     {
//         justOne:true //只删除一条
//         }
// );

// db.mytable1.find()
// db.mytable1.find().pretty()
// db.mytable1.findOne()

//条件语句
// 等于        {<key>:<value>}
// 小于        {<key>:{$lt:<value>}}
// 小于或等于   {<key>:{$lte:<value>}}
// 大于        {<key>:{$gt:<value>}}
// 大于或等于   {<key>:{$gte:<value>}}
// 不等于      {<key>:{$ne:<value>}}

//OR 条件
// MongoDB OR 条件语句使用了关键字 $or,语法格式如下：
// db.col.find(
//    {
//       $or: [
// 	     {key1: value1}, {key2:value2}
//       ]
//    }
// )

// $type 操作符
//如果想获取 "col" 集合中 title 为 String 类型的数据，你可以使用以下命令：
//db.col.find({"title" : {$type : 2}})
// 类型	                        数字	备注
// Double	                1	 
// String	                2	 
// Object	                3	 
// Array	                4	 
// Binary data	                5	 
// Undefined	                6	已废弃。
// Object id	                7	 
// Boolean	                8	 
// Date	                        9	 
// Null	                        10	 
// Regular Expression	        11	 
// JavaScript	                13	 
// Symbol	                14	 
// JavaScript (with scope)	15	 
// 32-bit integer	        16	 
// Timestamp	                17	 
// 64-bit integer	        18	 
// Min key	                255	Query with -1.
// Max key	                127	 


// limit获取指定数量文档
// db.COLLECTION_NAME.find().limit(NUMBER)
// db.mytable1.find().limit(3)

// skip()方法来跳过指定数量的数据
// db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)
// db.mytable1.find().limit(3).skip(1) //跳过第一条数据，显示2-4三条数据
// skip()方法默认参数为 0 

// sort()方法基本语法如下所示
// db.COLLECTION_NAME.find().sort({KEY:1})
// 1 为升序排列，而-1是用于降序排列
// db.mytable1.find().sort({"name":-1})




