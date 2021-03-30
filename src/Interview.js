//given two arrays, create a function that let's a user know (true/flase) whether the two arrays contain any common items
// 2 paramaters
//we don't wont to nest a for loop because the would be O(a*b)
//for the reason the the arrays can be different sizes

const randomArray = (n) => {
  const newArray = []
  for(let x = 0; x < n; x++){
    ascii = Math.ceil(Math.random()*26)+96
    newArray[x] = String.fromCharCode(ascii)
  }
  return newArray
}

const array1 = randomArray(100000)
const array2 = randomArray(100000)

const compareArrays = (arr1, arr2) => {
  let hashTable = {}
  for(let i = 0; i < arr1.length; i++){
    if(!hashTable[arr1[i]]){
      hashTable[arr1[i]] = true
    }
  }

  for(let j = 0; j < arr2.length; j++){
    if(hashTable[arr2[j]]){
      return true
    }
  }
  return false
}


console.log(
compareArrays(array1, array2)
)