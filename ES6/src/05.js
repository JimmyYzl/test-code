let arr = [];
for(let i =0; i<10000; i++){
  arr.push(i);
}

function for1(array){
  let time1 = (new Date()).getTime();
  var a = [];
  for (let index = 0; index < array.length; index++) {
    a.push(array[index]);
  }
  let time2 = (new Date()).getTime();
  console.log(time1);
  console.log(time2);
  console.log(time2 - time1);
}
for1(arr);