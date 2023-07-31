export const isEmptyObject = (obj) => {
	return JSON.stringify(obj) === '{}';
};

export const isEmptyArray = (arr) => {
	return JSON.stringify(arr) === '[]';
};

function generateColor() {
	const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
	let code = '';
	for (let i = 0; i < 6; i++) {
		code += hexArray[Math.floor(Math.random() * 16)];
	}
	return `#${code}`;
}

function prevent(fn, defaultOnly) {
	return (e, ...params) => {
		e && e.preventDefault();
		!defaultOnly && e && e.stopPropagation();
		fn(e, ...params);
	};
}

export { generateColor, prevent };
