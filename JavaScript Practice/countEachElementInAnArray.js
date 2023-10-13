const arr1=[1,2,3,3,4,5,2,1];
function countEachElementInAnArray(arr){
let countedData={};
for(let data of arr){
  if(!countedData[data]){
    countedData[data]=1;
  }
  else {
    countedData[data]++;
  }
} 
 return countedData;
}
countEachElementInAnArray(arr1);
