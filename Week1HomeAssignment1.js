function isOddOrEven(x){
    if(x%2==0){
        console.log("Even number")
    }
}
isOddOrEven(4)

function checkNumber(y){
    
    if(y>0){
        console.log("number is greater than 0")
         return "number is greater than 0";
    }else if(y<0){
         console.log("number is less than 0")
         return "number is less than 0";
    }else if(y==0){
        console.log("number is equal to 0")
         return "number is equal to 0";
    }
}

checkNumber(-10)

function launchBrowser(browsername){
    if(browsername=='chrome'){
        console.log("browser name is chrome")
    }else{
        console.log("browser name is  not chome")
    }
}
launchBrowser('firefox')

function runTests(testType){
    switch(testType){
        case "smoke":
                console.log("smoke test ---->"+testType);
                break;
        case "sanity":
                console.log("sanity test---> "+testType);
                break;
        case "regression":
                console.log("regression test--->"+testType);
                break;
        default:
                 console.log("smoke test");
                
    }
}
runTests("smoke");

var genderType="female";
function printGender(){
    let color="brown"
    if(genderType.startsWith("female")){
        var age=30
        let color="pink"
        console.log("color inside if block ---->"+color)
    }
    console.log("var age outside if block and inside function --->"+age)
}
printGender();
console.log("genderType --->"+genderType)

