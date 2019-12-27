function showDiv() {
	let x = document.getElementById("tulos");
	if (x.style.display === "none") {
    	x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

function calcTip() {
	let str;
	let moneyAmt = document.getElementById("rahea").value;
	if (moneyAmt != null) {
    	str = moneyAmt.value;
    }
	let servQ = document.getElementById("servQ").value;
	let pplAmt = document.getElementById("pplAmt").value;

	//calculate tip amount

	let total = (moneyAmt * servQ) / pplAmt;
	total = Math.round(total * 100) / 100;
	document.getElementById("tip").innerHTML = total;

};

document.getElementById("laske").onclick = function(){
	showDiv();
	calcTip();
}
