function insertionSort(arr) {//[-1, 2, 3, 3, 4, 7 ]
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];//-1;
		
		for (let j = i - 1; j >= 0; j--) {
			let prev = arr[j]
			
			if (j === 0 && current < prev) {
				arr[i] = prev;
				arr[j] = current;
			} else if (current < prev) {
				arr[j + 1] = prev;
			} else if (current >= prev) {
				arr[j + 1] = current;
				break;
			} 
		}
	
	}
	return arr
}

module.exports = {
    insertionSort
};