// Exmaple1
let s="Hello World";
const allwords=s.split(" ");
const lastword=allwords[allwords.length-1];
console.log("last word --->",lastword);
console.log("length of last word ",lastword.length);


// Example2
let s2=" fly me to the moon ";
let trimstring=s2.trim();
const allword=trimstring.split(" ");
const lastword2=allword[allword.length-1];
console.log("last word --->",lastword2);
console.log("length of last word ",lastword2.length);

// Example 3

function isAnagram(str1, str2){
    let str1afterremovespaces = str1.replace(/\s+/g, "");
let sortedstrin1=str1afterremovespaces.toLowerCase().split("").sort().join("");    
console.log(" sortedstrin1",sortedstrin1);

let str1afterremovespaces2 = str2.replace(/\s+/g, "");
let sortedstrin2=str1afterremovespaces2.toLowerCase().split("").sort().join("");    
console.log("sortedstrin2 ",sortedstrin2);


if(sortedstrin1===sortedstrin2){
console.log(" given string are anagram");
return true;
}else{
    console.log(" given strings are NOT anagram");
    return false;
}


}

console.log("1 ",isAnagram('listen', 'silent'));
console.log("2 ",isAnagram('hello', 'world'));
