function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;

  return array;
}

function bubbleSort(array) {
  let change = true;
  while (change) {
    change = false;
    for (let i = 0; i < array.length - 1; i++) {
      let ele = array[i];
      let nextEle = array[i + 1];

      if (ele > nextEle) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        change = true;
      }
    }
  }
  return array;
}

module.exports = {
  bubbleSort,
  swap
};
