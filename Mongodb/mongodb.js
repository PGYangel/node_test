// db.version()

// db.mytable1.insert({
//     title: 'MongoDB �̳�', 
//     description: 'MongoDB ��һ�� Nosql ���ݿ�',
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
//     {"title":"MongoDB �̳�"}
// )

// db.mytable1.remove(
//     {"name":"remove1"},
//     {
//         justOne:true //ֻɾ��һ��
//         }
// );

// db.mytable1.find()
// db.mytable1.find().pretty()
// db.mytable1.findOne()

//�������
// ����        {<key>:<value>}
// С��        {<key>:{$lt:<value>}}
// С�ڻ����   {<key>:{$lte:<value>}}
// ����        {<key>:{$gt:<value>}}
// ���ڻ����   {<key>:{$gte:<value>}}
// ������      {<key>:{$ne:<value>}}

//OR ����
// MongoDB OR �������ʹ���˹ؼ��� $or,�﷨��ʽ���£�
// db.col.find(
//    {
//       $or: [
// 	     {key1: value1}, {key2:value2}
//       ]
//    }
// )

// $type ������
//������ȡ "col" ������ title Ϊ String ���͵����ݣ������ʹ���������
//db.col.find({"title" : {$type : 2}})
// ����	                        ����	��ע
// Double	                1	 
// String	                2	 
// Object	                3	 
// Array	                4	 
// Binary data	                5	 
// Undefined	                6	�ѷ�����
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


// limit��ȡָ�������ĵ�
// db.COLLECTION_NAME.find().limit(NUMBER)
// db.mytable1.find().limit(3)

// skip()����������ָ������������
// db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)
// db.mytable1.find().limit(3).skip(1) //������һ�����ݣ���ʾ2-4��������
// skip()����Ĭ�ϲ���Ϊ 0 

// sort()���������﷨������ʾ
// db.COLLECTION_NAME.find().sort({KEY:1})
// 1 Ϊ�������У���-1�����ڽ�������
// db.mytable1.find().sort({"name":-1})




