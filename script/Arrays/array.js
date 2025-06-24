// const animal = ["Dog","Cow","Lion","Tigor","deer"];
// console.log ("animal number is:",animal);



//for loop

const flower = ["Rose","Lily","Marigold","Tulip"]
for(i =0;i<flower.length;i++){
    console.log(flower[i]);
}


// include method
const fruit = ["Apple","Banana","Pappya","Mango"];
if(fruit.includes ("Banana")){
    console.log("banana is included:");
}
else{
    console.log("Banana is not included");
}



//Remove first element
const fal =["Apple","Banana","Pappya","Mango"];

 let remove =  fal.shift();
 console.log("removed first item:",remove);

console.log(" After Remove first element:",fal);



//Remove last item

const fruits =["Apple","Banana","Pappya","Mango"];

let fruit1 =fruits.pop();

console.log("Removed item:",fruit1);
console.log("Remove last element:",fruits);



//Add item to the beginning

const seasonalfruit =["Apple","Banana","Pappya","Mango"];

let fruit2 = seasonalfruit.unshift("Strawberry");

console.log("Added item:",fruit2);

console.log("After add list",seasonalfruit);



//Replace  items

const animal = ["cat","Tiger","Dunkey","dog"];

animal[0] = "Lion";

console.log("changed item",animal);


//sort array

const sub =["Maths","Biology","Physics","Airthmatic","Science"];

sub.sort();

console.log("array after sorted array:",sub);

//Reverse Array
const river = ["Yamuna","ganaga","Sabarmati","Mahi"];

river.reverse();

console.log("Revers array:",river);


//index of

const elc =["laptop","mobile","airfryer","mixer"];

const index = elc.indexOf("laptop");

console.log("index array:",index);


//sum of arrays

const numbers =[12,23,34,45,55];

console.log(numbers.reduce(myfunction));


function myfunction(seema,arti){
    return seema + arti ;
}

const nums = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log("Sum:", sum);




//largest number in array

const num = [12,23,34,45,55];

let largest = Math.max (...num);

console.log("largest number:",largest);

const large = [90,56,67,89];
let biggernumber = Math.max(...large);
console.log("Bigger number is:",biggernumber);



//reverse array

const frnds = ["mina","shalu","meenu","kitu"];

console.log("Reverse arry:",frnds.reverse(frnds));


//each word in uper case

const kite = ["goat","dog","cat","now"];

for (i = 0;i <kite.length;i++){

    kite[i] = kite[i].toUpperCase();

}
console.log("array in uppercase:",kite)



//for lower case
const kites = ["Goat","Dog","Cat","Now"];

for (i = 0;i <kites.length;i++){

    kites[i] = kites[i].toLowerCase();

}
console.log("array in lowercase:",kites)


//10 natural numbers

const naturalnumbers = [];

for(i = 1;i<=10;i++)
 {
    naturalnumbers.push(i);

}
console.log("natural numbers:",naturalnumbers);


//print number 5

const digit = [];
for(i =1 ;i<=5;i++){
    console.log((i));
}


//check even and odd

// let number = prompt("enter a number");
// //let number = 7
// if( number % 2 == 0){
//     console.log("number is even:",number);

// }
// else {
//     console.log("number is odd:",number);
// }

//Array create and print

const professional =["Doctor","Engineer","Police","Software Engineer"]

for( i=1 ; i < professional.length;i++){

    console.log ("Print array:",professional);
}


const lion = ["Abb","Bbbb","Chhh","Diii","Ejjj"];
for(i =0;i<lion.length;i++){
    lion[i]=lion[i].toLowerCase();
}
console.log("lowercase:",lion);


