"use strict";

var x=0;

function myfunction() {
	x=x+1
	document.getElementById("counter").innerHTML = x;
	if(x%2==1){
		document.getElementById("first").innerHTML = "heloo world";
	}
	if(x%2==0){
		document.getElementById("first").innerHTML = "Hello world";
	}
}