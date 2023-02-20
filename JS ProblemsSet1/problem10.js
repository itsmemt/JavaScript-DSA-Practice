let arr=[1,2,3,4,5,6,7,8,9];
function BinarySearch(a,val){
    if(a.length<1){
        return "Array is Empty";
    }
    let left=0;
    let right=a.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(a[mid]===val){
            return `element ${a[mid]} found at index ${mid}`;
        }else if(a[mid]<val){
            left=mid+1;
        }
        else if(a[mid]>val){
            right=mid-1;
        }
    }
    return "Element Not Found";
}
console.log(BinarySearch(arr,3));