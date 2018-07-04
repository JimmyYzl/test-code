// class Logger {
//   printName(name = 'there') {
//     this.print(`Hello ${name}`);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const logger = new Logger();
// // const { printName } = logger;
// // printName();
// let prin = logger.printName;
// prin();

class Foo {
  constructor() {
       
  }

  static classMethod() {
    return "Hello";
  }
}

console.log(Foo.classMethod());

let foo = new Foo();
console.log(foo.classMethod());