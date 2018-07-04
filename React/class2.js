class Foo {
  constructor(name) {
    this.name = name;
  }
}

class Point {
  constructor() {
    return new Foo('haha')
  }
}

let a = new Point();
console.log(a);

console.log(a instanceof Point); //false
console.log(a instanceof Foo);  //true

let p = Object.getPrototypeOf(a);
console.log(p);
console.log(p == Foo.prototype);