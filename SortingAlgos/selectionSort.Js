var arr=[2,5,3,8,0,12];
function selectionSort(data){
  console.log(data);
  for(let i=0;i<data.length;i++){
     for(let j=i+1;j<data.length;j++){
       if(data[i]>data[j]){
         let temp=data[i];
         data.splice(i,1,data[j]);
         data.splice(j,1,temp);
       }
     }
  }
 console.log(data)
}
selectionSort(arr);