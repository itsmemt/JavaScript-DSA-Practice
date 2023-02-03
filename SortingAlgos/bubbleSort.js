var arr=[2,5,3,8,0,12,4,6,7];
function bubbleSort(data){
  console.log(data);
  for(let i=0;i<data.length-1;i++){
     for(let j=0;j<data.length-1;j++){
       if(data[j]>data[j+1]){
         let temp=data[j];
         data.splice(j,1,data[j+1]);
         data.splice(j+1,1,temp);
       }
     }
  }
 console.log(data)
}
bubbleSort(arr);