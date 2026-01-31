function revString(str){
    console.log("str --- ",str);
    
    let characters=str.split("");
    let reverseString="";

    for(let i=characters.length-1;i>=0;i--){
        reverseString=reverseString+characters[i];
    }
    console.log("Reversed string "+reverseString);
    return reverseString;
}

function isPallindrome(str){
    console.log(" strc",str);
    
    let reverseString=revString(str);

    console.log(" reverseString",reverseString);
    if(reverseString===str){
        console.log("Palindrome");
    }else{
        console.log("NOT Palindrome");
    }

}

isPallindrome("madam");