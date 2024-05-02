let calculateButton = document.getElementById("calculate");
let result = document.getElementById("result");
let principal = document.getElementById("principal");
let rate = document.getElementById("rate");
let time = document.getElementById("time");
let duration = document.getElementById("selector");
let error = document.getElementById("errormsg");

function calculator() {
  let p = parseFloat(principal.value);
  let r = parseFloat(rate.value);
  let t = parseFloat(time.value);
  let d = duration.value;
  let calculatedInterest;
  if(!p || !r || !t){
    error.textContent = "Please Enter the Input";
    error.style.color = "red";
  }
  else{
    error.textContent = " ";
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
    showResult(0, 0, 0);
    return;
  }

  if (d === "Year") {
    calculatedInterest = (p * r * t) / 100;
  } else {
    calculatedInterest = (p * r * t) / 1200;
  }

  let calculatedAmount = p + calculatedInterest;
  showResult(p, calculatedInterest, calculatedAmount);
}
}
function showResult(principal, output, amount) {
  result.innerHTML = "Principal:  $" + principal.toFixed(2) + "<br>Interest:  $" + output.toFixed(2) + "<br>Amount:  $" + amount.toFixed(2);
}


