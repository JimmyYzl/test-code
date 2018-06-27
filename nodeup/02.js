// let doSth = new Promise((resolve,reject) => {
//   console.log('hello');
//   resolve();
// })
// setTimeout(() => {
//   console.log('111');
//   doSth.then(() => {
//     console.log('over');
//   });
// }, 10000);  

setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);