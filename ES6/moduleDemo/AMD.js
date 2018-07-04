// AMD是应用于客户端环境的一种异步解决方案，但是也要兼容服务器端

// AMD模块定义
define([], function() {
  'use strict';
  function add(x, y) {
    return x + y;
  }

  return{
    add: add
  };
});