// for (var i = 0; i < 5; i ++) {
//   console.log(i);
// }

// for (var i = 0; i < 5; i ++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i ++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// setTImeout 是macrotask 队列
// setTimeout(function() {
//   console.log(1)
// }, 0);

// // 而Promise 是microtasks 队列
// new Promise(function executor(resolve) {
//   console.log(2);
//   for( var i=0 ; i<10000 ; i++ ) {
//     i == 9999 && resolve();
//   }
//   console.log(3);
// }).then(function() {
//   console.log(4);
// });
// console.log(5);


async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2 start');
  return new Promise((resolve, reject) => {
    resolve();
    console.log('async2 promise');
  })
}

console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);  

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
}).then(function() {
  console.log('promise3');
});
console.log('script end');

/*
script start
async1 start
async2 start
async2 promise
promise1
script end
async1 end
promise2
promise3
setTimeout
 */