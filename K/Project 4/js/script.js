// var a = 6;
// var b = 7;

// let message;

// message = "Hello";

// alert(a + b + message);

// let user = "John", age = 25, bio = "hello";

// if (a == b) {
//     alert(a);
// } else {
//     alert(b);
// }

// for (var i = 0; i < 5; i++){
//     alert(i);
// }

// Coding Challenges

// let fruits = ['Apples' , 'Banana'];

// for (var i = 0; i < 2; i++){
//     alert(fruits[i]);
// }

/*

Challenge 1: 
Alert that says your name

Challenge 2: 
Two variables, that tell me the sum of the variables 
as an alert. 

Challenge 3:
Make a list of numbers, then make a for loop to find the 
largest number. Then Alert that number. 


let numbers = [1,3489, 802348, 23894, 88];

var largestNum = 0;

for (var i = 0; i<5; i++){
    if (numbers[i] > largestNum){
        largestNum = numbers[i];
    }
}
alert(largestNum);

&& AND AND
|| OR



var sum = 0;

for (var i = 0; i < 1000; i++){
    if ((i % 3 == 0) || (i % 5 == 0)){
        sum += i;  
    }
}

console.log(sum);




var x = 0;
x = prompt("Enter your number");
var sum = 0;
for (var i = 0; i<x; i++){
    sum+=i;
    console.log(sum);
}

alert("The sum of 1 to your number is: "+ sum);



for (var i = 1; i < 13; i++){
    for (var j = 0; j < 13; j++){
        console.log(i + "x" + j + " = " + i*j);
    }
}




var a = 1;
var b = 2;
var max = 0;
while(max < 4000000) {
    var c = a + b;
    if (c % 2 == 0) max+=c;
    a = b;
    b = c;
}

console.log(max);

*/

function checkPrime(x){
    //console.log(x);
    var i = 2;
    while ( i < x) {
        if (x % i == 0) {
            return false;
        } else i++;
    }
    return true;
}

for ( var i = 600851475143; i > 0; i--){
    if (600851475143 % i == 0) {
        if (checkPrime(i)){
            console.log(i);
        }
    }
}



