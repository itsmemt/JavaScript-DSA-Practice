const arr=[1,2,3,4,5,6,7,8,9];
function rotateArray(data,num){
  for(let i=0;i<num;i++){
    data.push(data[i])
  }
  const newArr=data.slice(num,data.length);
  console.log(newArr)
}
rotateArray(arr,8);
