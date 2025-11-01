// lc21 - andrei course - arrays
/****************************************************************
 ANDREI STUDENT SOL - farrukh - WITHOUT USING SORT() -- FOLLOW THIS SOL
----------------------------------------------------------
https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12309366#questions/8229270
*****************************************************************/
function mergeSortedArrays3(array_1, array_2) {
  const merged_array = [];
  let i = 0;
  let j = 0;

  if (array_1.length === 0) return array_2;
  if (array_2.length === 0) return array_1;
  // [0, 3, 4, 31], [3, 4, 6, 30]
  while (i < array_1.length || j < array_2.length) {
    if (array_2[j] === undefined || array_1[i] < array_2[j]) {
      merged_array.push(array_1[i]);
      i++;
    } else {
      merged_array.push(array_2[j]);
      j++;
    }
  }
  console.log("merged arr: ", merged_array);
  return merged_array;
}

// mergeSortedArrays3([0, 3, 4, 31], [3, 4, 6, 30]); //  [ 0, 3,  3,  4,  4, 6, 30, 31] -- pass
// mergeSortedArrays3([0, 3, 4, 31], [0, 3, 4, 6, 30]); // [0, 0,  3,  3, 4, 4, 6, 30, 31] -- pass
// mergeSortedArrays3([0, 3, 4, 31], [-1, 3, 4, 6, 30]); //  [-1, 0,  3,  3, 4, 4, 6, 30, 31] -- pass
// mergeSortedArrays3([0, 3, 4, 31], [-1, 0, 3, 4, 6, 30]); //   [-1, 0, 0,  3,  3,4, 4, 6, 30, 31] -- pass
mergeSortedArrays3([-2, 0, 3, 4, 31], [-1, 3, 4, 6, 30]); //  [-2. -1, 0,  3,  3,  4, 4, 6, 30, 31] -- pass

/****************************************************************************************
 MY SOL - USING SORT()
 -----------------------
 spread arrays in a new arr and then sort them in asc order using sort() with compare()
 *****************************************************************************************/

function mergeSortedArrays(arr1, arr2) {
  let mergedSortedArray = [];
  let spreadArr = [...arr1, ...arr2];
  mergedSortedArray = spreadArr.sort((a, b) => a - b); // returns sorted arr and assigned to var 'mergedSortedArray'
  // console.log(spreadArr.sort((a, b) => a - b));
  console.log("mergedSortedArray: ", mergedSortedArray);
  return mergedSortedArray;
}
// mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]); //  [ 0, 3, 3, 4, 4, 6, 30, 31] -- pass
// mergeSortedArrays([0, 3, 4, 31], [0, 3, 4, 6, 30]); // [0, 0, 3, 3, 4, 4, 6, 30, 31] -- pass
// mergeSortedArrays([0, 3, 4, 31], [-1, 3, 4, 6, 30]); //  [-1, 0, 3, 3, 4, 4, 6, 30, 31] -- pass
// mergeSortedArrays([0, 3, 4, 31], [-1, 0, 3, 4, 6, 30]); //   [-1, 0, 0, 3, 3, 4, 4, 6, 30, 31] -- pass
// mergeSortedArrays([0, 3, 4, 31, -2], [-1, 3, 4, 6, 30]); //  [-2, -1, 0, 3, 3, 4, 4, 6, 30, 31] -- pass

/******************************************
ANDREI SOL
------------
FAILS FOR -VE NOS - DON'T FOLLOW THIS
*******************************************/
function mergeSortedArrays2(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];

  let i = 1;
  let j = 1;
  // check input 
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log("merged arr: ", mergedArray);
  return mergedArray;
}
// mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]);
// mergeSortedArrays2([0, 3, 4, 31], [0, 3, 4, 6, 30]); // [] -- failing 
// mergeSortedArrays2([0, 3, 4, 31], [-1, 3, 4, 6, 30]); //  [-1, 0,  3,  3, 4, 4, 6, 30, 31] 
// mergeSortedArrays2([0, 3, 4, 31], [-1, 0, 3, 4, 6, 30]); //   [ -1 ] -- failing
// mergeSortedArrays2([0, 3, 4, 31, -2], [-1, 3, 4, 6, 30]); //  [ -1, 0,  3,  3,  4,   4, 6, 30, 31, -2] -- failing

