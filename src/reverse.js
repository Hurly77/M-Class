// interviewer ask you to reverse a string.
// function must take in a string a return the same sting only arrd.
// we can make through a string and set the last index to the first index etc.

const reverse = (str) => [...str].reverse().join('');

const mergeSort = (arr1, arr2) => {
  const sorted = [];
  let item1 = arr1[0];
  let item2 = arr2[0];
  let i = 1;
  let j = 1;

  while (item1 || item2) {
    if (item2 === undefined || item1 < item2) {
      sorted.push(item1);
      item1 = arr1[i];
      i++;
    } else {
      sorted.push(item2);
      item2 = arr2[j];
      j++;
    }
  }
  return sorted;
};

console.log(mergeSort([0, 2, 4, 6, 7, 8], [2, 4, 6, 6, 7]));
