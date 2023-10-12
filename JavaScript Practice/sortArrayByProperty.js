const arr1 = [ {name: 'test2', roll: 2},{name: 'test1', roll: 1} ]
function sortOn(property){
    return function(a, b){
        if(a[property] < b[property]){
            return -1;
        } else if(a[property] > b[property]){
            return 1;
        } else{
            return 0;   
        }
    }
}
function sortArrayByName(arr){
return arr.sort(sortOn("name")); 
}
sortArrayByName(arr1);
