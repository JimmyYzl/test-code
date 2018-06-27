console.log(Number.isFinite('1243'));
console.log(Number.isFinite(1.234));
console.log(Boolean(NaN));
let a = 12/'a';
console.log(a);
if(a){
  console.log('a');
}else{
  console.log(`a=${a}`);
}

console.log(Number.isNaN(a));

console.log(Number.isInteger(12.1));

console.log('--------------------------------------');

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.isSafeInteger(Math.pow(2,53)-1));
