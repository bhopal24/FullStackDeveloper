// () [] {}
//here a is object
// name:"HP" is property 

let a = {name : "HP", color : "gray", size : 14}
console.log(a);
console.log(a.name);
console.log(a["size"]);


//Delete property
delete a.color;

console.log(a);

//create javascript object
const person ={firstName:"John",lastName:"Doe",age:50,eyecolor:"blue"};

person.nationality = "English"

//display data from the object:

document.getElementById("test").innerHTML= person.firstName  + " " + "is" + " " + person.nationality

//object method
const persons ={firstname:"John",lastName:"Doe",eyecolor:"Blue" , fullname:function(){
    return this.firstname + " " + " " + this.lastName;
}};

document.getElementById("test1").innerHTML = persons.fullname();





//create copy of objet for reassigning value

const testing = {firstName:"Ram",lastName:"sharma",Age:25};


document.getElementById("test2").innerHTML = testing.firstName + " " + "is" + " " + testing.Age


 const x = testing;

 x.age = 10;
 document.getElementById("test2").innerHTML = testing.firstName + " " + "is" + " " + testing.age



 //touppercase

 const upper = {firstName:"John",lastName:"Doe",age:25};

 //Add method

 upper.name = function()
 {
return(this.firstName + " " + this.lastName).toUpperCase();
 }

 //display
 document.getElementById("test3").innerHTML = "My Father is" + " " + upper.name();


 const lower = {firstname:"Seema",lastName:"Shukla",Designation:"Software Developer"};

 lower.case = function(){

    return(this.firstname + " " + this.lastName).toLowerCase();
 }

 document.getElementById("test4").innerHTML = "My full name is" + " " + lower.case();




