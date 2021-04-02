let tools = require('./tools');

const stringA = (n, arr) => {
	for (let x = 0; x < n; x++) {
		arr[x] = tools.randChar();
	}
	return arr;
};

const boolA = (n, arr) => {
	for (let x = 0; x < n; x++) {
		arr[x] = tools.bool();
	}
	return arr;
};

const intA = (n, i, arr) => {
	for (let x = 0; x < n; x++) {
		randInt = Math.ceil(Math.random() * i);
		arr[x] = randInt;
	}
	return arr;
};

const aa = (n, arr) => {
	for (let x = 0; x < n; x++) {
		arr[x] = [tools.randScalar()];
	}
	return arr;
};

const objA = (n, arr) => {
	for (let x = 0; x < n; x++) {
		let obj = {};
		obj[tools.getInt(x)] = tools.randScalar();
		arr[x] = obj;
	}
	return arr;
};

const mixA = (n, arr) => {
	for(let i=0; i< n; i++){
		arr[i] = tools.randItem()
	}
	return arr
}

const fixedA = (n, data=0, arr=[]) => {
	for (let i = 0; i < n ;i++) {
		arr[i] = data
	}
	return arr
}

const randomArray = (data, n, int = 9) => {
	let newA = [];
	switch (data) {
		case 'string':
			return stringA(n, newA);

		case 'bool':
			return boolA(n, newA);

		case 'integer':
			return intA(n, int, newA);

		case 'array':
			return aa(n, newA);

		case 'object':
			return objA(n, newA);

		case 'mix':
			return mixA(n, newA);

		default:
			return aa(10, newA);
	}
};

module.exports ={
	radArray: randomArray,
	fixArray: fixedA,
}
