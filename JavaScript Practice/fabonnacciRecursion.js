function fabonnacciRecursion(n){
    if(n===0){
        return 0;
    }
    if (n===1){
        return 1;
    }
    return fabonnacciRecursion(n-1) + fabonnacciRecursion(n-2)
}
console.log(fabonnacciRecursion(4))