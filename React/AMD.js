var math = (function() {
	let add = function(...arg) {
		let val = 0;
		arg.forEach((item) => {
			if (isFinite(item)) {
				item = item - 0;
				val += item;
			} else {
				console.error("数值类型错误");
				return false;
			}
		});
		return val;
	}

	return {
		add: add
	}
})();

let val = math.add(1, '23', 2, 3, 4, 5, 6, 7, 8, 9);
console.log(val);
