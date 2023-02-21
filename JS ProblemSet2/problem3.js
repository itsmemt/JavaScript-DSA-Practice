let str="aabbc";
function countLetters(s){
   let wordCount={};
   for(let i=0;i<s.length;i++){
    let char=s[i];
    if(wordCount[char]){
        wordCount[char]++
    }
    else{
        wordCount[char]=1;
    }
   }
   console.log(wordCount)
}
countLetters(str)