// function Father(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Father.prototype.say = function() {
//   console.log(`哈哈，${this.x}`);
// }

// function Son(x) {
//   this.x = x;
// }
// Son.prototype = new Father("1","2");

// let son = new Son('小明');

// console.log(son);
// son.say();

class Father {
	constructor(name) {
		this.name = name;
	}
	say() {
		console.log(`${this.name},haha`);
	}
}

class Son extends Father {
	constructor(x, y, name) {
		super(name); //调用父类construction
		this.x = x;
		this.y = y;
	}

	jj() {
		console.log(`${this.x} 与 ${this.y} name是${this.name}`);
	}
}

let son = new Son('x', 'y', '😆');
son.say();
son.jj();
