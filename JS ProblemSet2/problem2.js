// Program to count no of each word in a string..
let str="what is you name who are you is the who is";
function countWords(s){
   let wordCount={};
   let wordarr=s.split(" ");
   for(let i=0;i<wordarr.length;i++){
    let word=wordarr[i];
    if(wordCount[word]){
        wordCount[word]++
    }
    else{
        wordCount[word]=1;
    }
   }
   console.log(wordCount)
}
countWords(str)

let arr=[1,2,3,4,5];
console.log(arr.indexOf(3))