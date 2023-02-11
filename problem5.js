const arr1=[34,56,209,59,8,708];
function solve(arr){
    let h1=-Infinity;
    let h2=-Infinity;
    const length=arr.length;
    for(let i=0;i<length/2;i++){
        if(arr[i]>h1){
           h1=arr[i];
        }
        if(arr[length-i-1]>h2){
            h2=arr[length-i-1];
         }
    }
    if(h1>h2){
       return h1;
    }
    else{
        return h2;
    }
}
console.log(solve(arr1));