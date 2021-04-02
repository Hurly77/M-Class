const getInt = (i) => {
	return Math.round(Math.random() * i);
};

const bool = () => {
	return getInt(1) === 1 ? true : false;
};

const randomChar = () => {
	ascii = Math.ceil(Math.random() * 26) + 96;
	return String.fromCharCode(ascii);
};

randomData = () => {
	let dataTypes = [{}, 96, 9, true, false, []];
	return dataTypes[getInt(5)];
};

const randomScalar = () => {
	let scalar = [randomChar(), getInt(9), true, false];
	return scalar[getInt(3)];
};

randomItem = () => {
	const data = randomData();
	if (typeof data === 'object' && !Array.isArray(data)) {
		let key = getInt(100);
		data[key] = randomScalar();
		return data;
	}
	if (Array.isArray(data)) {
		data.push(randomScalar());
		return data;
	}
	if (data === 9) {
		return getInt(9);
	}
	if (typeof data === 'boolean') {
		return data;
	}
	if (data === 96) {
		return randomChar();
	}
	return data;
};

module.exports = {
	getInt: getInt,
	randChar: randomChar,
	randScalar: randomScalar,
	randData: randomData,
	randItem: randomItem,
	bool: bool,
};
