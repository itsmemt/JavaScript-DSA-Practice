let arr=[23,25,12,56,78,43]
function solve(n, prices){
    let lowest=Infinity;
    let highest=-Infinity;
    let ind=0;

      for(let i=0;i<n;i++){
        if(prices[i]<lowest){
              lowest=prices[i];
              ind=i;
          }
          if(i>ind){
           if(prices[i]>highest){
               highest=prices[i];
              }
          }
      }
return highest-lowest;
}
console.log(solve(6,arr))