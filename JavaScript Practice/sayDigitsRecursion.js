function sayDigitsRecursion (n){
    let arr=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    if(n===0){
        return;
    }
    let digit=n%10;
    n=parseInt(n/10);
    sayDigitsRecursion(n)
    console.log(arr[digit]);
    return;
}
console.log(sayDigitsRecursion(415))