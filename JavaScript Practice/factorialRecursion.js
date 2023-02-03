function FactorialRecursion(n){
    if(n===0){
        return 1;
    }
    return n*FactorialRecursion(n-1);
}
console.log(FactorialRecursion(4))