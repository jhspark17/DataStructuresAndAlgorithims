function swap(arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
	return arr;
}

function selectionSort(arr) {//[ 2, -1, 4, 3, 7, 3 ]
	
	
	let minIdx = null;
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];//2
		let minimum = Infinity;
		for (let j = i; j < arr.length; j++) {
			let tempMin = arr[j];

			if (tempMin < minimum) {
				minimum = tempMin;
				minIdx = j;
			}
		}
		arr[i] = minimum;
		arr[minIdx] = num;
		// arr = swap(arr, i, minIdx);
	}
	return arr;
}

module.exports = {
    selectionSort,
    swap
};