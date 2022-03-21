
//To convert input string to Number use + or Number() or parseInt
let num = +prompt("enter number", 5);

function add7(input){
    let result = input + 7;
    return result;
}

alert(add7(num))


// Arrow functions
let sumArrow = a => a + 7;
alert(sumArrow(4));

let diffArrow = (a, b) => a - b;
alert(diffArrow(5, 7))

let sayHi = () => alert(`Hello!`)
sayHi();


//complex arrow function
let question = prompt("Are you an employed", "yes");

let ask = (question === "yes") ?
() => alert('I have some bad news') :
() => alert('Makes sense');

ask();

//practice with confirm
//let confirmButton = prompt("is this working")

let confirmArrow = (confirm("is this working?") == true) ?
() => alert('yes it is') :
() => alert('Nope')

confirmArrow();

//Capitalize First letter
let capitalizeFirst = (string1) => {
    return string1.charAt(0).toUpperCase() + string1.slice(1).toLowerCase();
}

alert(capitalizeFirst("hello WORLD"));

//Pick iut the last letter
let pickLastLetter = (string2) => {
    return string2.charAt(string2.length -1);
}

alert(pickLastLetter("HDFC Bank"));

// The Fizz Buzz Problem
let inputFizz = prompt("Please enter a number for countdown", 10)

for(let i=1; i<= inputFizz; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 == 0) {
        console.log("Fizz")
    }
    else if(i % 5 == 0) {
        console.log("Buzz")
    }
    else{
        console.log(i);
    }
}