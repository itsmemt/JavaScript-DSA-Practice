// Implementation of Linear Search
let arr=[1,2,3,4,5,6,7];
function LinearSearch(a,val){
    let status="element is not present";
  for(let i=0;i<=a.length;i++){
   if(a[i]===val){
    status="element is present"
   }
  }
  return status;
}
console.log(LinearSearch(arr,9));
// function Search(a,val){
//     let elem=arr.filter(elem=>elem===val)
//     if(elem.length>0){
//         return elem[0]
//     }else {
//         return "Item does not exist"
//     }
// } 