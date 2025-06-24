
//creating fumction
function er()
{
let fname = document.forms['test']['uname'].value;
let mail = document.forms['test']['Email'].value;
let password = document.forms['test']['password'].value;
let confirmp  = document.forms['test']['cpassword'].value;

if(fname.length<3 || fname.length>25)
    {
document.getElementById("name").innerText ="User name must be between 3 to 25 charcaters.";//

document.getElementById("uname").style.borderColor ="red";//added css property

    }
    else{
        document.write(fname);
    }

    if(mail == "")
    {
         document.getElementById("email").innerText = "Please enter the mail.";
         document.getElementById("Email").style.borderColor = "red";
    }
    else{
        document.write(mail);
        document.getElementById("Email").style.borderColor = "green";
    }
    if(password == "" || confirmp == "")
    {
        document.getElementById("pass").innerText = "please enter password ";
        document.getElementById("cpass").innerText = "please enter confirm password ";
        document.getElementById("cpassword").style.borderColor = "red";
        document.getElementById("password").style.borderColor = "red";

    }


}









