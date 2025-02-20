var CSS=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function SetGradient()
{
	body.style.background="linear-gradient(to right, " + color1.value + "," + color2.value +")";
	CSS.textContent=body.style.background + ";";
}

color1.addEventListener("input",SetGradient);
color2.addEventListener("input",SetGradient);

//Can Also be done by adding onclick user name inline with input 
/*
<input onclick="setGradient()" class ="color1"type="color" name="color1" value=#00ff00>
*/