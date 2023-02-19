// Find the largest term in an array;
let arr=[2,1,9,5,3,4,7,6];
function largest(a){
  let n=a.length;
  let max=a[0];
  for(let i=0;i<n;i++){
    if(a[i]>max){
      max=a[i];
    }
  }
  console.log(max);
}
largest(arr);
function reverseArray(a){
    let n=a.length-1;
    for(let i=0;i<n/2;i++){
            let temp=a[n-i];
            a[n-i]=a[i];
            a[i]=temp;
          }
          console.log(a)
}
reverseArray(arr);