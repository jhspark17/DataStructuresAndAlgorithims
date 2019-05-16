function merge(array1, array2) {
    let result = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] <= array2[0]) {
            result.push(array1.shift());
        } else {
            result.push(array2.shift());
        }
    }
    return result.concat(array1, array2)
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let left = mergeSort(array.slice(0, Math.floor(array.length / 2)));
    let right = mergeSort(array.slice(Math.floor(array.length / 2)));
    
    return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};