function onLoad() {
    alert("This is only for the Nuthouse Family");
    document.getElementById("timestamp").innerHTML = Date();
    // Javascript is case sensitive onLoad is different from onload
    // Javascript allows us to add alerts and dynamic (changes with time) content: like a date stamp
}

function checkNumber() {
	var theNumber, theMessage;

	theNumber = document.getElementById("smallnumber").value;

// If x is Not a Number or is not 1 or 2 then return a message
if (isNaN(theNumber) || theNumber < 1 || theNumber > 2) {
    theMessage = "Type only 1 or 2";
} else {
    theMessage = "Thank you for your input";
}
document.getElementById("numberMessage").innerHTML = theMessage;

}