function radixSort(arr) {//[ 4, 9, 0, 23, 15, 100, 66, 41, 5, 10 ]
	if (arr.length <= 1) return arr;
	if ((!Array.isArray(arr))) return null;
	
	maxDigits = getMaxDigits(arr);
	
	for (let i = 0; i <= maxDigits; i++) {
		let numbers = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};
		for (let j = 0; j < arr.length; j++) {
			let num = arr[j]
			let digit = getDigitFrom(num, i)
			numbers[digit].push(num);
		
		}
			arr = [].concat(...Object.values(numbers));
	}
	return arr;
}

const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;;

const getIntLength = num => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}


module.exports = {
    radixSort
};