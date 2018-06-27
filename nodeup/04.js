let app = new Promise((resolve, reject) => {
  console.log(5);
  setTimeout(() => {
    console.log(1);
    resolve();
  }, 1000);
});

console.log(3);
app.then(() => {
  console.log(2);
})
console.log(4);