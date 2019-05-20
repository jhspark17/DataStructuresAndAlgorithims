function countingSort(arr, max) {
    let array = new Array(max + 1).fill(0);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        array[arr[i]]++
    }
    for (let j = 0; j <= array.length; j++) {
        let counter = array[j];

        for (let k = 0; k < counter; k ++) {
            result.push(j);
        }
    }
    return result;
}


module.exports = {
    countingSort
};