function myfunction()
{
    console.log("Say Hello");
}

myfunction();// call the function

function greet(name)
{
console.log("Hello," + name + "!");

}
greet("World")

// Function with Return Value
function add(a,b)
{
    
let sum = a+b;
return sum;
}

console.log(add(2,3));


//Function to Check Even or Odd
function checkevevorodd(num)
{
if (num % 2 == 0)
{
console.log("even:",(num));
}
else{
    console.log("odd:",(num));
}
}
checkevevorodd(4);
checkevevorodd(5);



// Function to Find Maximum
function findlargest(a,b,c)
{
 console.log(Math.max(a,b, c));
  
}
findlargest(3,4,5);

//Function to Reverse a String
//have to  ask

//Function Expression
function exp(num)
{

console.log(num*num);
}
exp(7);


//Function Inside Object (Method)
let calculator = {

    add:function(a,b)
    {
       return a+b;
    },
    minus:function(x,y){
        return x-y;
    }
}
console.log(calculator.add(4,5));
console.log(calculator.minus(10,6));




function revers()
{
    const arr = [2,5,6,6,2,3,1];
    arr.reverse();
    console.log("Reverse array:",arr);
}
revers();//need to ask

//Callback Function
//need to ask


//Array Tasks

const fruits = ["Apple","Orange","Banana","Pappya","Mango"];

console.log("fruit array is:",fruits);

console.log("first element is :",fruits[0]);
console.log("last element is :",fruits[4]);

fruits.push("Grapes");//added new element in last 
console.log(fruits);

fruits.unshift("Pineapple");//added new element at the begining 
console.log(fruits);


fruits.shift();
console.log(fruits);//Removed first element from array

fruits.pop();
console.log(fruits);//Removed last element from array

fruits.sort();
console.log("Sort Array:",fruits);// Sort Array

let size = fruits.length;
console.log("Length of Array:",fruits);//length of Array


//Loop Through an Array
const fruit = ["Apple","Apple","Orange","Banana","Pappya","Mango"]
for(let i = 0;i<fruit.length;i++)
{
console.log(fruit[i]);
}


const fruite = ["Apple","Orange","Pappya","Mango"];
if(fruite.includes("Banana"))
{
    console.log("Banana is included",fruite)

}
else
{
 console.log("Banana is not included",fruite);
    
}

const ages =[32,34,54,13,16];
const result = ages.filter(checkadult);
console.log("Adult ages:",result);

function checkadult(age){
    return age>=18;
}





const kites = ["Apple","Orange","Lemon","Pappaya"];

for(i = 0;i<kites.length;i++)
{
     kites[i] = kites[i].toUpperCase();

}
console.log("Upperacase",kites);













