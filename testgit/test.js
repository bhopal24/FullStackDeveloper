


  function validations()
  {
let firstname = document.forms['demo']['Name'].value;
let occu = document.forms['demo']['Occupation'].value;
let html = document.forms['demo']['HTML'].value;
let email = document.forms['demo']['Email'].value;
let conmail = document.forms['demo']['confirm'].value;
let number = document.forms['demo']['Number'].value;
let date = document.forms['demo']['Date'].value;
let reppass = document.forms['demo']['Repeat'].value;
isvalid = true;

if (firstname == "") {
    // Remove 'd-none' to make the error visible
    document.querySelector(".input_box").classList.remove("d-none");
    
    // Add red border to input
    document.getElementById("Name").style.borderColor = "red";
    isvalid = false;

} 
else 
{
   document.querySelector(".input_box").classList.add("d-none");
   document.getElementById("Name").style.borderColor = "";

   isvalid = true;
}

    if(email == "")
    {
        document.getElementById('test3').innerText = "input is not completed";
        document.getElementById('Email').style.border = "red";

    }
    else
    {
        document.write(email); 
    }
    if (conmail !== email)
    {
         document.getElementById('test4').innerText = "input is not completed";
         

    }

    
  }
