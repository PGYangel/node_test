/*
* Buffer 与字符编码
* Node.js 目前支持的字符编码包括：
ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

ucs2 - utf16le 的别名。

base64 - Base64 编码。

latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

binary - latin1 的别名。

hex - 将每个字节编码为两个十六进制字符。
* */

const buf =Buffer.from('abc123','ascii');

console.log(buf.toString());
console.log(buf.toString('utf8'));
console.log(buf.toString('utf16le'));
console.log(buf.toString('ucs2'));
console.log(buf.toString('base64'));
console.log(buf.toString('latin1'));
console.log(buf.toString('binary'));
console.log(buf.toString('hex'));

