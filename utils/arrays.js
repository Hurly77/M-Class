const getInt = (i) => {
	return Math.round(Math.random() * i);
};
randomItems = () => {
	let dataTypes = {
		0: {},
		1: 96,
		2: 9,
		3: true,
		4: false,
	};

		let item = dataTypes[getInt(4)];
		if (typeof item === 'object') {
      return item[getInt(1000)] = {key4: 1, key3: '2', key2: [], key1: true}
		}
		if (item === 9) {
			return getInt(9);
		}
		if (typeof item === 'boolean') {
			return item;
		}
		if (item === 96) {
			ascii = Math.ceil(Math.random() * 26) + 96;
			return String.fromCharCode(ascii);
		}
};

const stringA = (n) => {
	let newArray = [];
	for (let x = 0; x < n; x++) {
		ascii = Math.ceil(Math.random() * 26) + 96;
		newArray[x] = String.fromCharCode(ascii);
	}
	return newArray;
};

const boolA = (n) => {
	let newArray = [];
	for (let x = 0; x < n; x++) {
		let io = Math.round(Math.random() * 1);
		io === 0 ? (newArray[x] = true) : (newArray[x] = false);
	}
	return newArray;
};

const intA = (n, i) => {
	let newArray = [];
	for (let x = 0; x < n; x++) {
		randInt = Math.ceil(Math.random() * i);
		newArray[x] = randInt;
	}
	return newArray;
};

const aa = (n) => {
	let newArray = [];
	for (let x = 0; x < n; x++) {
		newArray[x] = [getInt(10000)];
	}
	return newArray;
};

const objA = (n, i) => {
	let newArray = [];
	for (let x = 0; x < n; x++) {
    let obj = {}
    obj[getInt(x)] = getInt(n)
		newArray[x] = obj
	}
	return newArray;
};

const randomArray = (data, n, int = 9) => {
	switch (data) {
		case 'string':
			return stringA(n);

		case 'bool':
			return boolA(n);

		case 'integer':
			return intA(n, int);

		case 'array':
			return aa(n);

		case 'object':
			return objA(n);

		case 'mix':
			return aa(n);

		default:
			return aa(10);
	}
};

module.exports = randomArray;
