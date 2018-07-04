// commonJS是nodejs的模块化规范主要应用于服务端，应为服务端的模块都是在内存中和浏览器端不同

// 开发一个模块功能

function add(x, y) {
  return x + y;
}
let a = 10;

// 对外暴露方法变量，在demo1中使用
exports.a = 10;
exports.add = add;