

function input1() //function for input name
{
	
 var set= document.getElementById("firstelement").value;
 var rel= /(.*[a-z]){3}/i; // only letters from a-z are accepted min 3 required
 console.log("rel: "+rel);
 
 if(rel.test(set))//checks for the condition 
 { 
  document.getElementById("firstnameprompt").style.color="red";
  document.getElementById("firstnameprompt").innerHTML="Valid";
  return true;
 }
  else
  {
  document.getElementById("firstnameprompt").style.color="red";
  document.getElementById("firstnameprompt").innerHTML="Invalid";
  return false;
  }
}
function input2()//function for input last name
{
	
 var den=document.getElementById("secondelement").value;
 var ber= /(.*[a-z]){3}/i; //only letters from a-z are accepted min 3 required
 
 if(ber.test(den))
 {
  document.getElementById("secondnameprompt").style.color="red";
  document.getElementById("secondnameprompt").innerHTML="Valid";
  return true;
 }
  else
  {
  document.getElementById("secondnameprompt").style.color="red";
  document.getElementById("secondnameprompt").innerHTML="Invalid";
  return false;
  }
}
function input3()//function for phone number
{
	var ret=document.getElementById("thirdelement").value;
	var abc= /^\d{3}-\d{3}-\d{4}$/;//10 numbers are required in the format 3-3-4
	if (abc.test(ret))
	{
		document.getElementById("phonenumber").style.color="red";
		document.getElementById("phonenumber").innerHTML="Valid";
		return true;
	}
	 else
  {
  document.getElementById("phonenumber").style.color="red";
  document.getElementById("phonenumber").innerHTML="Invalid";
  return false;
  }
}  
function input4()//function for number of rooms
{
		var quan=document.getElementById("quantity").value;
		console.log(quan);
		if(quan>10)//if greater than 10 it takes input 10
		{
			document.getElementById("quantity").value=10;
			console.log(quan);
		}
		else if(quan<1)//if less than 1 it takes input 1
		{
			document.getElementById("quantity").value=1;
			console.log(quan);
		}
		
}
function result()//function called from onclick event
{
	
	var set= document.getElementById("firstelement").value;
	 var den=document.getElementById("secondelement").value;
	var ret=document.getElementById("thirdelement").value;
	var quan=document.getElementById("quantity").value;
	var pri=document.getElementById("pricelement").value; //stores value of room cost
	var sum= set.toUpperCase()+""+den.toUpperCase();
	document.getElementById("summary").innerHTML="<h2> Confirmation:</h2>";//displayed in para from id summary
	document.getElementById("summary").innerHTML+= "<span>"+sum+"</span>";
	document.getElementById("summary").innerHTML+= "<h3> Total Charge = Rs.</h3><span>"+ pri*quan+ "</span>";//total charge displayed
	
	
	
}
