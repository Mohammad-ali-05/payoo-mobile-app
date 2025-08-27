// Reusable code
const mobileNumber = 11111111111;
const pinNumber = 1111;

// Converting user provided number from string to number
function mobileNumberConverted(id) {
  const mobileNumberConverted = parseInt(document.getElementById(id).value);
  return mobileNumberConverted;
}
// Converting user provided pin from string to number
function pinNumberConverted(id) {
  const pinNumberConverted = parseInt(document.getElementById(id).value);
  return pinNumberConverted;
}
//Converting user provided amount from string to number
function amountConverted(id) {
  const amountConverted = parseInt(document.getElementById(id).value);
  return amountConverted;
}
// Balance converted from string to number
function balanceConverted() {
  const balanceConverted = parseInt(
    document.getElementById("balance").innerText
  );
  return balanceConverted;
}
// Function to reset input field value
function resetInputValue(ids) {
  for (const id of ids) {
    document.getElementById(id).value = "";
  }
}
//Hiding all the section
function allSectionHide() {
  const navigation = document.getElementsByClassName("navigation");
  for (const nav of navigation) {
    nav.style.display = "none";
  }
}
// Add money section functionality
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (mobileNumber !== mobileNumberConverted("add-money-number")) {
      alert("Account number is invalid");
    } else if (pinNumber !== pinNumberConverted("add-money-pin")) {
      alert("Pin number is invalid");
    } else if (
      isNaN(amountConverted("add-money-amount")) ||
      amountConverted("add-money-amount") < 0
    ) {
      alert("Invalid amount given");
    } else {
      const newBalance =
        balanceConverted() + amountConverted("add-money-amount");
      document.getElementById("balance").innerText = newBalance;
    }
    resetInputValue(["add-money-number", "add-money-amount", "add-money-pin"]);
  });

//Cash out section functionality
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  if (mobileNumber !== mobileNumberConverted("cash-out-number")) {
    alert("Mobile number is invalid");
  } else if (pinNumber !== pinNumberConverted("cash-out-pin")) {
    alert("Pin number is invalid");
  } else if (
    isNaN(amountConverted("cash-out-amount")) ||
    amountConverted("cash-out-amount") < 0
  ) {
    alert("Invalid amount given");
  } else {
    if (balanceConverted() < amountConverted("cash-out-amount")) {
      alert("Insufficient balance");
    } else {
      const newBalance =
        balanceConverted() - amountConverted("cash-out-amount");
      document.getElementById("balance").innerText = newBalance;
    }
  }
  resetInputValue(["cash-out-number", "cash-out-amount", "cash-out-pin"]);
});

//Transfer money section functionality
document.getElementById("transfer-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    if (mobileNumber !== mobileNumberConverted("transfer-money-number")) {
      alert("Mobile number is invalid");
    } else if (pinNumber !== pinNumberConverted("transfer-money-pin")) {
      alert("Pin number is invalid");
    } else if (
      isNaN(amountConverted("transfer-money-amount")) ||
      amountConverted("transfer-money-amount") < 0
    ) {
      alert("Invalid amount given");
    } else {
      if (balanceConverted() < amountConverted("transfer-money-amount")) {
        alert("Insufficient balance");
      } else {
        const newBalance =
          balanceConverted() - amountConverted("transfer-money-amount");
        document.getElementById("balance").innerText = newBalance;
      }
    }
    resetInputValue([
      "transfer-money-number",
      "transfer-money-amount",
      "transfer-money-pin",
    ]);
  });

//Pay bill section functionality
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("i am connected")
  if (mobileNumber !== mobileNumberConverted("pay-bill-number")) {
    alert("Mobile number is invalid");
  } else if (pinNumber !== pinNumberConverted("pay-bill-pin")) {
    alert("Pin number is invalid");
  } else if (
    isNaN(amountConverted("pay-bill-amount")) ||
    amountConverted("pay-bill-amount") < 0
  ) {
    alert("Invalid amount given");
  } else {
    if (balanceConverted() < amountConverted("pay-bill-amount")) {
      alert("Insufficient balance");
    } else {
      const newBalance =
        balanceConverted() - amountConverted("pay-bill-amount");
      document.getElementById("balance").innerText = newBalance;
    }
  }
  resetInputValue(["pay-bill-number", "pay-bill-amount", "pay-bill-pin"]);
});

//Add money button functionality
document
  .getElementById("add-money-nav-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    allSectionHide();
    document.getElementById("add-money-section").style.display = "block";
  });

// Cash out button functionality
document
  .getElementById("cash-out-nav-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    allSectionHide();
    document.getElementById("cash-out-section").style.display = "block";
  });

//Transfer money button functionality
document
  .getElementById("transfer-money-nav-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    allSectionHide();
    document.getElementById("transfer-money-section").style.display = "block";
  });

// Get bonus button functionality
document
  .getElementById("get-bonus-nav-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    allSectionHide();
    document.getElementById("get-bonus-section").style.display = "block";
  });

//Pay bill button functionality
document.getElementById("pay-bill-nav-btn").addEventListener("click", function (e) {
  e.preventDefault()
  allSectionHide();
  document.getElementById("pay-bill-section").style.display = "block";
});