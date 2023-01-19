import {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} from "./main";

test("capitalize first letter of string", () => {
	expect(capitalize("string is sav")).toBe("String is sav");
});

test("reverseString reverses a string", () => {
	expect(reverseString("jason")).toBe("nosaj");
});

test("calculator adds 2 + 2 to 4", () => {
	expect(calculator.add(2, 2)).toBe(4);
});

test("calculator subtracts 3 - 2 to 1", () => {
	expect(calculator.subtract(3, 2)).toBe(1);
});

test("calculator divides 10 / 5 to 2", () => {
	expect(calculator.divide(10, 5)).toBe(2);
});

test("calculator multiplies 2 * 2 to 4", () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});

test("caesar cipher shifts characters", () => {
	expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
		"efgfoe uif fbtu xbmm pg uif dbtumf"
	);
});

test("cipher shifts characters and wraps properly", () => {
	expect(caesarCipher("z", 2)).toBe("b");
});

test("caesar cipher  maintains case", () => {
	expect(caesarCipher("aBcD", 1)).toBe("bCdE");
});

test("caesar cipher ignores puntuation", () => {
	expect(caesarCipher(".!^%", 1)).toBe(".!^%");
});

test("expect analyze array to calculate avg, min, max, length", () => {
	expect(analyzeArray([1, 2, 3, 4])).toEqual({
		average: 10 / 4,
		min: 1,
		max: 4,
		length: 4,
	});
});
