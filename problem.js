let arr=[1,2,3,4,5,6,7,8];
function reverseLastHalf(a){
    let n=a.length;
    let newArr=[];
    let tempArr=[...a.slice(n/2)];
    console.log(tempArr);
    for(let i=0;i<tempArr.length/2;i++){
        let temp=tempArr[tempArr.length-i-1];
        tempArr[tempArr.length-i-1]=tempArr[i];
        tempArr[i]=temp;
    }
      newArr=[...a.slice(0,n/2),...tempArr];
    console.log(a,newArr);
  return newArr; 
}
reverseLastHalf(arr);