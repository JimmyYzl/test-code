function ff(...arg){
  console.log(arg[0]);
  console.log(arg);
}

ff(1,2,3,4,5,6,7);

console.log('-----------------------------------------------------------');

let arr1 = ['a', 'b', 'c', 'd']
let arr2 = [...arr1];
let arr3 = arr1;
console.log(arr2);
arr1.push('e');
console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log('-----------------------------------------------------------');

function fa(first, ...arg){
  console.log(first);
  console.log(arg);
}
fa(1,2,3,4,5,6,7,8);

console.log('-----------------------------------------------------------');

let stringg = 'world';
console.log(`hello ${stringg}`);

let a = 1;
let b = 2;
console.log(`a+b=${a+b}`);

let s = "这段话到底写的是啥啊，完全看不懂的说。"
console.log(s.includes('完全'));

console.log(s.repeat(2));