var credits = 0;
var generalPeopleCredits = 0;
var disabledPeopleCredits = 0;
var Distance = 0;
var FareCar = 0;
var FareBusDis = 0;
var FareBusGen = 0;
var Carbon = 0;
document
  .querySelector("#routeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedOption = document.querySelector("#routeSelect").value;
    switch (selectedOption) {
      case "Punjabi Bagh - Shivaji Stadium":
        generalPeopleCredits = 6;
        disabledPeopleCredits = 9;
        Distance = 18;
        FareCar = 100;
        FareBusGen = 45;
        FareBusDis = 40;
        Carbon = 400;
        break;
      case "Patel Nagar - Gole Market":
        generalPeopleCredits = 2;
        disabledPeopleCredits = 3;
        Distance = 6;
        FareCar = 50;
        FareBusGen = 20;
        FareBusDis = 15;
        Carbon = 150;
        break;
      case "AIIMS Delhi - South Extension 1":
        generalPeopleCredits = 1;
        disabledPeopleCredits = 2;
        Distance = 3;
        FareCar = 20;
        FareBusGen = 10;
        FareBusDis = 5;
        Carbon = 75;
        break;
      case "Rohini Sector 5 - Rohini Sector 20":
        generalPeopleCredits = 2;
        disabledPeopleCredits = 3;
        Distance = 5;
        FareCar = 25;
        FareBusGen = 15;
        FareBusDis = 10;
        Carbon = 125;
        break;
      case "Paschim Vihar - IP Extension":
        generalPeopleCredits = 12;
        disabledPeopleCredits = 18;
        Distance = 35;
        FareCar = 200;
        FareBusGen = 75;
        FareBusDis = 70;
        Carbon = 850;
        break;
    }
    document.querySelector(
      "#routeInfo .card-deck .card:nth-child(1) ul"
    ).innerHTML = `
        <li>Distance Between the 2 places: ${Distance} Km</li>
        <li>Fare when used car: ${FareCar} Rs</li>
        <li>Fare when used E-Bus: ${FareBusGen} Rs</li>
        <li>Fare saved: ${FareCar - FareBusGen} Rs</li>
        <li>CO Emissions reduced: ${Carbon}</li>
        <li>Carbon Credits Earned: ${generalPeopleCredits}</li>
    `;
    document.querySelector(
      "#routeInfo .card-deck .card:nth-child(2) ul"
    ).innerHTML = `
        <li>Distance Between the 2 places: ${Distance} Km</li>
        <li>Fare when used car: ${FareCar} Rs</li>
        <li>Fare when used E-Bus: ${FareBusDis} Rs</li>
        <li>Fare saved: ${FareCar - FareBusDis} Rs</li>
        <li>CO Emissions reduced: ${Carbon}</li>
        <li>Carbon Credits Earned: ${disabledPeopleCredits}</li>
    `;
    document.querySelector("#routeInfo").style.display = "block";
  });
document.querySelector("#okButton1").addEventListener("click", function () {
  document.querySelector("#routeInfo").style.display = "none";
  credits = credits + generalPeopleCredits;
  document.getElementById("creditValue").innerText = credits;
  checkCredits();
});
var Adhar = [123456789012, 234567890123, 345678901234];
document.querySelector("#okButton2").addEventListener("click", function () {
  var input = document.createElement("input");
  input.type = "input";
  input.id = "adharInput";
  input.placeholder = "Enter Adhar number for verification";
  input.className = "form-control"; // Bootstrap class for styling input fields
  document
    .querySelector("#routeInfo .card-deck .card:nth-child(2)")
    .appendChild(input);
  var submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.className = "btn btn-primary mt-2"; // Bootstrap classes for styling buttons
  document
    .querySelector("#routeInfo .card-deck .card:nth-child(2)")
    .appendChild(submitButton);
  submitButton.addEventListener("click", function () {
    var adharNumber = document.querySelector("#adharInput").value;
    if (Adhar.includes(parseInt(adharNumber))) {
      document.querySelector("#routeInfo").style.display = "none";
      credits = credits + disabledPeopleCredits;
      alert("You have been verified as a differently abled person!");
      document.getElementById("creditValue").innerText = credits;
      checkCredits();
    } else {
      alert("You have NOT been verified as a differently abled person!");
    }
    input.remove();
    submitButton.remove();
  });
});
document.querySelector("#notOkButton1").addEventListener("click", function () {
  document.querySelector("#routeInfo").style.display = "none";
});
document
  .querySelector("#contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank You For Submitting! Will Get Back To You Shortly");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
document.getElementById("creditValue").innerText = credits;
function checkCredits() {
  if (credits >= 6) {
    document.getElementById("offer").style.display = "block";
    document.getElementById("offer1").style.display = "block";
    document.getElementById("offer1Q").style.display = "block";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "block";
  }
  if (credits >= 10) {
    document.getElementById("offer2").style.display = "block";
    document.getElementById("offer2Q").style.display = "block";
    document.getElementById("btn3").style.display = "block";
    document.getElementById("btn4").style.display = "block";
  }
  if (credits >= 12) {
    document.getElementById("offer3").style.display = "block";
    document.getElementById("offer3Q").style.display = "block";
    document.getElementById("btn5").style.display = "block";
    document.getElementById("btn6").style.display = "block";
  }
  if (credits >= 36) {
    document.getElementById("offer4").style.display = "block";
    document.getElementById("offer4Q").style.display = "block";
    document.getElementById("btn7").style.display = "block";
    document.getElementById("btn8").style.display = "block";
  }
  if (credits >= 72) {
    document.getElementById("offer5").style.display = "block";
    document.getElementById("offer5Q").style.display = "block";
    document.getElementById("btn9").style.display = "block";
    document.getElementById("btn10").style.display = "block";
  }
}
document.getElementById("btn1").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("routes").scrollIntoView({ behavior: "smooth" });
  document.getElementById("routeSelect").value =
    "AIIMS Delhi - South Extension 1";

  var formEvent = new Event("submit");
  document.getElementById("routeForm").dispatchEvent(formEvent);

  document.getElementById("okButton1").style.display = "none";
  document.getElementById("okButton2").style.display = "none";

  let redeemButton1 = document.createElement("button");
  redeemButton1.textContent = "Redeem";
  redeemButton1.id = "redeemButton1";
  redeemButton1.className = "btn btn-primary";
  redeemButton1.addEventListener("click", function () {
    credits -= 6;
    document.getElementById("creditValue").textContent = credits;

    alert("Congrats for your free ride!");
    document.getElementById("offer").style.display = "none";
    document.getElementById("offer1").style.display = "none";
    document.getElementById("offer1Q").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    checkCredits();
    redeemButton1.remove();
    redeemButton2.remove();

    document.getElementById("okButton1").style.display = "block";
    document.getElementById("okButton2").style.display = "block";

    document.getElementById("routeInfo").style.display = "none";
  });
  document
    .querySelector("#routeInfo .card-deck .card:nth-child(1)")
    .appendChild(redeemButton1);

  let redeemButton2 = document.createElement("button");
  redeemButton2.textContent = "Redeem";
  redeemButton2.id = "redeemButton2";
  redeemButton2.className = "btn btn-primary";
  redeemButton2.addEventListener("click", function () {
    // Show a form for Aadhar number input
    let adharForm = document.createElement("form");
    adharForm.style.marginTop = "10px";
    let adharInput = document.createElement("input");
    adharInput.type = "text";
    adharInput.id = "adharInput";
    adharInput.placeholder = "Enter Aadhar Number";
    adharInput.style.marginRight = "10px";
    adharForm.appendChild(adharInput);

    // Add a submit button to the form
    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    submitButton.style.backgroundColor = "#4CAF50";
    submitButton.style.color = "white";
    adharForm.appendChild(submitButton);

    document
      .querySelector("#routeInfo .card-deck .card:nth-child(2)")
      .appendChild(adharForm);

    adharForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var adharNumber = adharInput.value;
      if (Adhar.includes(parseInt(adharNumber))) {
        credits -= 6;
        document.getElementById("creditValue").textContent = credits;
        alert("Congrats for your free ride!");
        document.getElementById("offer").style.display = "none";
        document.getElementById("offer1").style.display = "none";
        document.getElementById("offer1Q").style.display = "none";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        checkCredits();
      } else {
        alert("You have NOT been verified as a differently abled person!");
      }
      redeemButton1.remove();
      redeemButton2.remove();

      document.getElementById("okButton1").style.display = "block";
      document.getElementById("okButton2").style.display = "block";

      document.getElementById("routeInfo").style.display = "none";

      adharForm.style.display = "none"; // Make the form vanish after pressing submit
    });
  });
  document
    .querySelector("#routeInfo .card-deck .card:nth-child(2)")
    .appendChild(redeemButton2);
});
