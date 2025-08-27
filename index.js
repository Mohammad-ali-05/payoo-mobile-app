// User login validation
document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const mobileNumber = 11111111111
    const pinNumber = 1111
    const mobileNumberInput = document.getElementById("account-number").value;
    const mobileNumberInputConverted = parseInt(mobileNumberInput)
    const pinNumberInput = document.getElementById("pin-number").value;
    const pinNumberInputConverted = parseInt(pinNumberInput)
    if (mobileNumberInput.length < 11 ) {
        alert("Mobile number is less then 11 digit")
    } else if (pinNumberInput.length < 4) {
        alert("Pin number is less then 4 digit")
    } else {
        if (mobileNumber !== mobileNumberInputConverted) {
          alert("Mobile number is invalid");
        } else if (pinNumber !== pinNumberInputConverted) {
          alert("Pin number is invalid");
        } else {
          window.location.href = "./home/home.html";
        }
    }
})