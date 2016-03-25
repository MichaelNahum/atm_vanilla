var button1 = document.getElementById("checkingDepositButton")
var button2 = document.getElementById("checkingWithdrawalButton")
var button3 = document.getElementById("savingsDepositButton")
var button4 = document.getElementById("savingsWithdrawalButton")

checkingField = document.getElementById("checkingAmount")
savingsField = document.getElementById("savingsAmount")

checkingAmount1 = 0
savingsAmount1 = 0

var checkingBalDisplay = document.body.querySelector("#checkingBalanceDiv")
var savingsBalDisplay = document.body.querySelector("#savingsBalanceDiv")

button1.addEventListener("click", depositChecking)
button2.addEventListener("click", withdrawalChecking)
button3.addEventListener("click", depositSavings)
button4.addEventListener("click", withdrawalSavings)


function depositChecking() {
  var checkingInput = checkingField.value
  checkingAmount1 = checkingAmount1 + parseInt(checkingInput);
  checkingBalDisplay.innerHTML="$"+checkingAmount1;
}

function withdrawalChecking() {
  var checkingInput = checkingField.value;
  var tempCheckingBal = checkingAmount1 - parseInt(checkingInput);
  if (tempCheckingBal >= 0) {
     checkingAmount1 = tempCheckingBal;
  }
  else if (tempCheckingBal <= 0 && tempCheckingBal+savingsAmount1 >= 0){
    savingsAmount1 += tempCheckingBal;
    checkingAmount1 = 0;
    savingsBalDisplay.innerHTML="$"+savingsAmount1;

  }
  else {alert("you have insufficient funds. grossly insufficient.")
}
  checkingBalDisplay.innerHTML="$"+checkingAmount1;

}

function depositSavings() {
  var savingsInput = savingsField.value
  savingsAmount1 = savingsAmount1 + parseInt(savingsInput);
  savingsBalDisplay.innerHTML="$"+savingsAmount1;
}

function withdrawalSavings() {
  var savingsInput = savingsField.value
  savingsAmount1 = savingsAmount1 - parseInt(savingsInput);
  savingsBalDisplay.innerHTML="$"+savingsAmount1;
}
