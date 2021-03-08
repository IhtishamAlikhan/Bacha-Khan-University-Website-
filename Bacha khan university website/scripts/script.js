// JavaScript Document
function displayAlert(){
	alert("This is an alert box!");
	}
function displayConfirm(){
	confrm = confirm("Press Ok or Cancel");
	if(confrm == true){
		document.write("You pressed Ok");
	}
	else{
		document.write("You pressed Cancel");
		}
}
function displayPrompt(){
	var name = prompt("Enter your name", "Your Name");
	document.write("Welcome <b>"+name+"</b> to our site...");
	}
function changeCmpName(){
	document.getElementById('baner').innerHTML = "Islamia College Peshawar"
	}
function chngeNameStyle(){
	document.getElementById('baner').style = "color:#fff; font-size:20px; line-height:120px; font-weight:bold;";
	}
	
////////////// Form Validation /////////////////

function validate(){
	var name = document.forms["studentForm"]["stname"].value;
	var email = document.forms["studentForm"]["email"].value;
	var phoneNumber = document.forms["studentForm"]["phone"].value;
	if(name == null || name == ""){
		alert("Please enter your name.");
		return false;
		}
	if(email == null || email == ""){
		alert("Please enter your valid email.");
		return false;
		}	
	var atpos = email.indexOf('@');
	var dotpos = email.lastIndexOf('.');
	if(atpos < 1 || dotpos < atpos + 2){
		alert("Invalid Email! Please enter a valid email address");
		return false;
		}
	
	if(phoneNumber == null || phoneNumber == ""){
		alert("Please enter your Phone Number");
		return false;
		}
	var number = /^[0-9]+$/;
	if(phoneNumber.match(number)){
		return true;
		}
	else{
		alert("Please enter only numbers");
		return false;
		}
	
	}