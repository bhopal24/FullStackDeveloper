//find the largest number(1st method)

let a = 10,b= 20,c=3;
let largest = Math.max(a,b,c);

console.log("largest number:",largest);

//second method for largest number
const large = [12,45,23,67,56];

let bigger = Math.max(...large);
console.log("Bigger number is:",bigger);

const natural = [];

for(let i =0;i<=10;i++){

    natural.push(i)
}
console.log("natural number is:",natural)

const naturalnumber = [];
for(let i =1;i<=20;i++){
    naturalnumber.push(i)
}
console.log("natural number is:",naturalnumber)


const fruits = ["apple","banana","kiwi","orange","coconut"]

for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
}

const kites = ["APPLE","ORANGE","LEMON","PAPPAYA"];

for(i = 0;i<kites.length;i++)
{
     kites[i] = kites[i].toLowerCase();

}
console.log("lower",kites);

let sum = [1,2,3,3,3,4];
let num = 0;

for(let i =0;i<sum.length;i++){

    num += sum[i];
}
console.log("sum of array:",num)




function myfunction(numer1,numer2){
    return numer1 + numer2;
}

const numbers = [34,45,22,12];

console.log(numbers.reduce(myfunction));



const arr = [2,5,6,6,2,3,1];

arr.reverse();
console.log("Reverse array:",arr);
