/*
* 将 Buffer 转换为 JSON 对象
* buf.toJSON()
* 当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()。
* */

var buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
var json = JSON.stringify(buf);

console.log(json)

var copy = JSON.parse(json, (key, value) = > {
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});

console.log(copy)
