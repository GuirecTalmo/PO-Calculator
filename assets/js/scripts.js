// Cette fonction récupère la valeur de l'élément HTML par son id
function getValueById(id) {
  return Number(document.getElementById(id).value);
}

// Cette fonction calcule le montant du pourboire
function calculateTip(billAmount, tipPercentage) {
  return (billAmount * tipPercentage) / 100;
}

// Cette fonction calcule le montant total par personne
function calculateTotalPerPerson(billAmount, tipAmount, numberOfPeople) {
  return (billAmount + tipAmount) / numberOfPeople;
}

// Cette fonction affiche le résultat dans l'élément HTML correspondant
function displayResult(value, element) {
  element.innerHTML = "$" + value.toFixed(2);
}

// Cette fonction réinitialise les valeurs des éléments HTML
function reset() {
  document.getElementById("bill").value = "";
  document.querySelector(".button_discount").value = "";
  displayResult(0, document.getElementById("total_tip"));
  document.getElementById("people").value = "";
  displayResult(0, document.getElementById("total_person"));
}

// Cette fonction gère le clic sur les boutons de pourcentage de pourboire
function handleClick(ele) {
  const billAmount = getValueById("bill");
  const numberOfPeople = getValueById("people");
  if (billAmount <= 0 || numberOfPeople <= 0) {
    alert("Please enter valid numbers");
    return;
  }
  const tipPercentage = Number(ele.value);
  const tipAmount = calculateTip(billAmount, tipPercentage);
  const totalAmountPerPerson = calculateTotalPerPerson(
    billAmount,
    tipAmount,
    numberOfPeople
  );
  displayResult(tipAmount, document.getElementById("total_tip"));
  displayResult(totalAmountPerPerson, document.getElementById("total_person"));
}

// Cette fonction gère la soumission du formulaire de pourcentage de pourboire personnalisé
function handleSubmit(event) {
  event.preventDefault();
  const billAmount = getValueById("bill");
  const numberOfPeople = getValueById("people");
  if (billAmount <= 0 || numberOfPeople <= 0) {
    alert("Please enter valid numbers");
    return;
  }
  const customPercentage = Number(event.target[0].value);
  const tipAmount = calculateTip(billAmount, customPercentage);
  const totalAmountPerPerson = calculateTotalPerPerson(
    billAmount,
    tipAmount,
    numberOfPeople
  );
  displayResult(tipAmount, document.getElementById("total_tip"));
  displayResult(totalAmountPerPerson, document.getElementById("total_person"));
}

// Écouteurs d'événements pour les boutons de pourcentage de pourboire
const tipButtons = document.querySelectorAll(".button_discount");
tipButtons.forEach((button) => {
  button.addEventListener("click", () => handleClick(button));
});

// Écouteur d'événements pour le formulaire de pourcentage de pourboire personnalisé
const customForm = document.getElementById("custom_form");
customForm.addEventListener("submit", handleSubmit);

// Écouteur d'événements pour le bouton de réinitialisation
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);
