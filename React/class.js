// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// };

// Point.prototype.toString = function () {
//   return `(${this.x}, ${this.y})`
// };

// let p = new Point(1, 2);

// Object.prototype.sayHaha = function () {
//   return `${this.x} 哈哈 ${this.y}`;
// }

// console.log(p)

// console.log(p.sayHaha())
// console.log(p.toString());

// console.log(p);

// console.log(Point.prototype === p.__proto__);

// console.log(Point.prototype.constructor === Point);

// console.log(Point.prototype.constructor === p.__proto__.constructor);

// console.log(p.__proto__)

class Point1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

let p1 = new Point1(1, 2);

Point1.prototype.sayHaha = function () {
  console.log(`Haha ${this.x}`);
}

Object.assign(Point1.prototype, {
  sayBay () {
    console.log(`Bye`);
  },
  saygun () {
    console.log(`滚吧`);
  }
})
// console.log(p1.toString());
// console.log(p1)

// console.log('---------------------------------------------------------')

// console.log(p1.__proto__ === Point1.prototype);

// console.log(Point1 === p1.__proto__.constructor);


p1.sayHaha();
p1.sayBay();
p1.saygun();


console.log('-----------------------------')

// function Car(name, price){
//   this.name = name;
//   this.price = price;
// }

// Car.prototype.lookCar = function(){
//   return `${this.name}要卖${this.price}元！`
// }


class Car{
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  lookCar() {
    return `${this.name}要卖${this.price}元！`
  }
}

let car = new Car("WEY", "22万");

console.log(car.lookCar());

console.log(Car.prototype.constructor === Car);

Object.assign(Car.prototype, {
  sayhaha() {
    console.log(`${this.name}，hahaha`);
  },
  driveCar() {
    console.log(`我把${this.name}开上五环！`);
  }
});

car.driveCar();