let obj={
    a:1,
    b:2,
    c:3,
    d:5
}
for(let keys in obj){
    console.log(`Key:${keys} value:${obj[keys]}`);
}
let arr=[2,3,4,5]
for(let val of arr){
    console.log(val);
}
for(let index in arr){
    console.log(`${arr[index]} is at ${index}`);
}
let arr2=["jan","feb","mar"];
for(let val of arr2){
    console.log(val.toUpperCase())
}