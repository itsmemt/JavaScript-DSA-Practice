const str1 = "dgqztusjuu";
const str2 = "dqugjzutsu";

function solve(s1, s2) {
    let newStr = "";
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                newStr += s2[j]
                break;
            }
        }
    }
    if (s1 === newStr) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(solve(str1, str2))