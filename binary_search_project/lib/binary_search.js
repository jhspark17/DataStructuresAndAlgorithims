function binarySearch(array, target) {
    if (array.length === 0) return false;
    let mid = Math.floor(array.length / 2);
    
    if (array[mid] === target) {
        return true;
    } else if (array[mid] > target) {
        return binarySearch(array.slice(0, mid), target);
    } else {
        return binarySearch(array.slice(mid + 1), target);
    }  
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;
    let mid = Math.floor(array.length / 2);
    
    if (array[mid] === target) {
        return mid;
    } else if (array[mid] > target) {
        return binarySearchIndex(array.slice(0, mid), target);
    } else {
        let result = binarySearchIndex(array.slice(mid + 1), target);
        return (result === -1 ? -1 : result + mid + 1);
    }  
}


module.exports = {
    binarySearch,
    binarySearchIndex
};