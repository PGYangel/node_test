var demo1=require('./demo1');
var demo2=require('./demo2');

demo1.hello();
demo1.test();
console.log(demo1.name);
console.log(demo1.obj.num);
console.log('===========================================');

var hello=new demo2();
console.log(hello)
hello.setName('test');
hello.sayHello();


