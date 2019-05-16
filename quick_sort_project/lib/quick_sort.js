function quickSort(array) {
	if (array.length <= 1) return array;
	let pivot = array.shift();
	let left = array.filter(ele => { return ele < pivot});
	let right = array.filter(ele => {return ele >= pivot});
	let quickLeft = quickSort(left);
	let quickRight = quickSort(right);

	let sorted = quickLeft.concat([pivot], quickRight)
	return sorted
}


module.exports = {
    quickSort
};