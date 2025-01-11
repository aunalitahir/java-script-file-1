function sumFirstAndLastDigit(num) {
    let lastDigit = num % 10;
    let firstDigit;

    while (num >= 10) { 
        num = Math.floor(num / 10);
    }
    firstDigit = num; 

    const sum = firstDigit + lastDigit; 
    console.log("Sum of first and last digit:", sum);
}
let number = 34567; 
sumFirstAndLastDigit(number);






/*&function countDigits(num) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10); 
        count++; 
    }
    console.log("Number of digits:", count);
}
let num = 12345; /
countDigits(num);



function multiplicationTable(number) {
    let i = 1; 
    while (i <= 10) { 
        console.log(`${number} x ${i} = ${number * i}`);
        i++; 
    }
}
let number = 5; 
multiplicationTable(number);




function sumOddNumbers(n) {
    let sum = 0;
    let i = 1; 
    while (i <= n) {
        if (i % 2 !== 0) { 
            sum += i; 
        }
        i++; 
    }
    console.log("Sum of odd numbers:", sum);
}

let n = 10; 
sumOddNumbers(n);



function sumEvenNumbers(n) {
    let sum = 0;
    let i = 1; 
    while (i <= n) {
        if (i % 2 === 0) { 
            sum += i; 
        }
        i++; 
    }
    console.log("Sum of even numbers:", sum);
}
let n = 10; 
sumEvenNumbers(n);






function sumNaturalNumbers(n) {
    let sum = 0;
    let i = 1; 
    while (i <= n) {
        sum += i; 
        i++;
    }
    console.log("Sum of natural numbers:", sum);
}
let n = 10; 
sumNaturalNumbers(n);





function printOddNumbers() {
    let i = 1; 
    while (i <= 100) {
        if (i % 2 !== 0) { 
            console.log(i); 
        }
        i++; 
    }
}

printOddNumbers();





function printEvenNumbers() {
    let i = 1;
    while (i <= 100) {
        if (i % 2 === 0) { 
            console.log(i); 
        }
        i++; 
    }
}

printEvenNumbers();








function printAlphabets() {
    let charCode = 97; 
    while (charCode <= 122) { 
        console.log(String.fromCharCode(charCode)); 
        charCode++; 
    }
}

printAlphabets();



function printNaturalNumbersReverse(n) {
    let i = n;
    while (i >= 1) {
        console.log(i); 
        i--; 
    }
}


let n = 10; 
printNaturalNumbersReverse(n);





function printNaturalNumbers(n) {
    let i = 1; 
    while (i <= n) {
        console.log(i); 
        i++; 
    }
}
let n = 10; 
printNaturalNumbers(n);