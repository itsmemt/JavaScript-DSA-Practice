// Final Value Of Variable After Performing Operations
// There is a programming language with only four operations and one variable X:
// ++X and X++ increment the value of the variable X by 1. --X and X-- decrements the value of the variable X by 1. Initially, the value of X is 0.
// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
// Input Format
// First Parameter - number n
// Second Parameter - Array arr of strings
// Output Format
// Return the number

// Solution...
const arr1=["++X", "++X", "X++"]
const length=arr1.length
function solve(n, arr){
    let result=0;
   for(let i=0;i<n;i++){
      if(arr[i]==="--X" || arr[i]==="X--"){
           result--;
      }
       else{
          result++;
      }
     
   }
   console.log(result);
   return result;
}
solve(length,arr1);