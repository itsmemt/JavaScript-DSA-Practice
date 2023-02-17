// Interview Question of  16th Feb 2023 :12Pm to 12:30;
// write a program to reverse a string
let str="yABCD222YYUU&^%%aa";
function reverseString(s){
  let str=""
  for(let i=s.length-1;i>=0;i--){
    str+=s[i]
  }
  console.log(str)
}
reverseString(str)

// Write a program to count no of each letters in a string..
let str2 = "abcd738aaabbtttccdddaa";
let count = {};

for (let i = 0; i < str2.length; i++) {
  let char = str2[i];
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}
console.log(count);