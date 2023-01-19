function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
	const chars = [];
	for (const c of str) {
		chars.unshift(c);
	}
	return chars.join("");
}

const calculator = {
	add: function (a, b) {
		return a + b;
	},

	subtract: function (a, b) {
		return a - b;
	},

	divide: function (a, b) {
		return a / b;
	},

	multiply: function (a, b) {
		return a * b;
	},
};

function caesarCipher(str, shift) {
	let res = "";

	for (const c of str) {
		const code = c.charCodeAt(0);
		if (isLetter(code)) {
			const newCode = shiftChar(code, shift, c.toUpperCase() === c);
			res += String.fromCharCode(newCode);
		} else {
			res += c;
		}
	}

	return res;
}

function shiftChar(code, shift, isCapital) {
	let normalizer = 97;
	if (isCapital) {
		normalizer = 65;
	}

	const normalized = code - normalizer;
	const shifted = (normalized + shift) % 26;
	return shifted + normalizer;
}

function isLetter(code) {
	return (code > 64 && code < 91) || (code > 96 && code < 123);
}

function analyzeArray(arr) {
	const len = arr.length;
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (const num of arr) {
		if (num < min) {
			min = num;
		}

		if (num > max) {
			max = num;
		}

		sum += num;
	}

	return {
		average: sum / len,
		min,
		max,
		length: len,
	};
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
