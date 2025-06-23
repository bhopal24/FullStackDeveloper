//JavaScript if...else Tasks

function positiveornegative(num)
{
if(num > 0){
    console.log("number is positive:",num);
    
}
else if(num <0){
    console.log("number is positive:",num);
    
}
else{
    console.log("number is zero:",num);
    
}
}

//Even or Odd
function evenorodd(num)
{
    if(num%2==0){
        console.log("number is even",num);   
    }
    else{
        console.log("number is odd:",num)
    }
    
}

evenorodd(23);
evenorodd(22);

//Age eligibility

function forvote(age)
{
if (age >=18){
    console.log("You are Eligible for vote:",age);   
}
else{
    console.log("you are not Eligible:",age);
  
}
}

forvote(12);
forvote(20);


//largest number

function largest(a,b,c)
{
    if(a >=b && b>=c)
{
    console.log("largest number:",a);
    
}
else if(b>=c && a>=c){
    console.log("largest number is:",b);
    
}
else{
    console.log("largest number is:",c);
    
}

}

largest(12,89,90);

//leap year


let year = 2024;
    if ((year%4==0 && year%100  !== 0 )|| (year %400 == 0 ))
    {
        console.log("This year is leap year:",year);
        
    }
    else
    {
        console.log("This year is not leap year",year);
        
    }

//password
let password = 5677;
if(password === 1234)
    {
        console.log("Access granted");
        
    }
    else{
        console.log("Access Denied");
        
    }

// grade checker

let grade = 51;
if(grade >= 90 && grade <= 100){
    console.log("your grade is A");
    
}
else if(grade>=80 && grade <=89){
    console.log("Your grade is B");   
}
else if(grade>=70 && grade <= 79){
    console.log("Your grade is C");
    
}
else if(grade >= 60 && grade <=69){
    console.log("Your grade is D");
    
}
else{
    console.log("you are fail",grade);
    
}

//weekdays

let days = "monday";
if (days == "Sunday"){
    console.log("today is Holiday");
    
}
else{
    console.log("today is working day");
    
}

//temperture check

let degree = 10;
if (degree >= 30){
    console.log("Hot");
    
}
else if(degree < 30 && degree >=20 )
    {
        console.log("Warm");
        
    }
else
{console.log("cold");}



//null,undefine and empty string
let a = 25;

if (a === null )
    {
    console.log("null");

    }
    else if(a === undefined)
    {
    console.log("undefine");
    }
    else if (a === " ")
    {
        console.log("it's empty")
    }

    else{
        console.log("its valid");
    }

//Loop task

//print 1 to 10 numbers

for(print = 0;print <=10;print++)
{
    console.log(print);
}

//while loop

let i =2;
while(i <=20){
    console.log(i);
    i++;   
}

//do...while loop

let j = 5;
do {
console.log(j);
j--;

}
while(j>=1);




   let sum = 0;
    for(let i = 0; i <=7; i++ ){
        sum = sum + i;   
    }
    console.log("sum:", sum)



