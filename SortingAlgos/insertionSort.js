var arr=[5,2,3,8,0,12,4,6,7];
function insertionSort(data){
  console.log(data);
  for(let i=1;i<data.length;i++){
    let temp=data[i];
    let j=i-1;
    while(j>=0){
        if(data[j]>temp){
          data[j+1]=data[j];
        }
        else{
            break;
        }
     j--;
    }
    data[j+1]=temp;
  }
 console.log(data)
}
insertionSort(arr);