var billEle = document.body.querySelector(".bill");

var billPrompt = Number(prompt("What is the total bill?"));
var taxBill = (0.07 * billPrompt) + billPrompt;
var tipBill = (0.05 * taxBill);
var finalBill = (taxBill + tipBill);
billEle.innerHTML = "My final bill is " + finalBill;