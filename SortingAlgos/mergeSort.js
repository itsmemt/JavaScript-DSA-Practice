function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}
let arr=[3,6,23,22,2,4];
console.log(arr)
console.log(mergeSort(arr))




// let arr=[3,6,2,4];
// function mergeSort(a,s,e){
//    let mid=(s+e)/2;
//    if(s<=e){
//     return a;
//    }
// //    For left part 
// mergeSort(s,mid-1)
// // For Right Part
// mergeSort(mid,e)
// console.log(a)
// return 5;
// }
// console.log(mergeSort(arr,0,4))