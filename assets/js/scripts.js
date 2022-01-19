


function getValue(ele) {
    // Sélectionner l'élément input et récupérer sa valeur
    let billAmount = document.getElementById("bill").value;
    let peopleAmount = document.getElementById("people").value;
    let percentButton = ele.innerText;
    // Afficher la valeur
    let totalTip = document.querySelector('.font_total_tip');
    let totalPerson = document.querySelector('.font_total');

    if (billAmount >= 1) {

        let tipsAmount = 0;
        let totalAmount = 0;
        console.log(billAmount);
        console.log(percentButton);
        tipsAmount = Math.round(billAmount / 100 * percentButton);
        console.log(tipsAmount);
        totalTip.append(tipsAmount);
        totalAmount = Math.round(tipsAmount / peopleAmount);
        totalPerson.append(totalAmount);

        return totalAmount;
    }

}

function reset() {
    
    document.getElementById("bill").value = "";
    document.querySelector('.button_discount').value = "";
    document.getElementById("total_tip").innerHTML = ""; 
    document.getElementById("people").value = "";
    document.getElementById("total_person").innerHTML = ""; 

}

function calc() {
   let calcul = (500 / 100) * 10; 
   return calcul;
}


console.log(calc());