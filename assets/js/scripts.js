

function getcustomValue() {
    let Customtips = 0;
    let askCustom = prompt('Which percent you want ?');
    Customtips = Number(askCustom);
    console.log(askCustom);
    // Sélectionner l'élément input et récupérer sa valeur
    let billAmount = document.getElementById("bill").value;
    let peopleAmount = document.getElementById("people").value;

      // Afficher la valeur
      let totalTip = document.querySelector('.font_total_tip');
      let totalPerson = document.querySelector('.font_total');
  
  
      if (billAmount <= 0) {
  
          let invalidNumber = alert('You eat for free ?!')
  
          return invalidNumber
          
      }
  
      if (peopleAmount <= 0) {
  
          let invalidNumber = alert('Please enter a number of person')
  
          return invalidNumber
          
      }
  
      if (billAmount >= 1) {
  
          let tipsAmount = 0;
          let totalAmount = 0;
          console.log(billAmount);
          console.log(Customtips);
          tipsAmount = (billAmount / 100 * Customtips).toFixed(2);
          console.log(tipsAmount);
          document.getElementById("total_tip").innerHTML = ""; 
          totalTip.append(tipsAmount);
          totalAmount = (billAmount / peopleAmount).toFixed(2);
          document.getElementById("total_person").innerHTML = ""; 
          totalPerson.append(totalAmount);     
      }

}


function getValue(ele) {
    // Sélectionner l'élément input et récupérer sa valeur
    let billAmount = document.getElementById("bill").value;
    let peopleAmount = document.getElementById("people").value;
    let percentButton = ele.value; 

    // Afficher la valeur
    let totalTip = document.querySelector('.font_total_tip');
    let totalPerson = document.querySelector('.font_total');


    if (billAmount <= 0) {

        let invalidNumber = alert('You eat for free ?!')

        return invalidNumber
        
    }

    if (peopleAmount <= 0) {

        let invalidNumber = alert('Please enter a number of person')

        return invalidNumber
        
    }

    if (billAmount >= 1) {

        let tipsAmount = 0;
        let totalAmount = 0;
        console.log(billAmount);
        console.log(percentButton);
        tipsAmount = (billAmount / 100 * percentButton).toFixed(2);
        console.log(tipsAmount);
        document.getElementById("total_tip").innerHTML = ""; 
        totalTip.append('$' + tipsAmount);
        totalAmount = (billAmount / peopleAmount).toFixed(2);
        document.getElementById("total_person").innerHTML = ""; 
        totalPerson.append('$' + totalAmount);     
    }

}

function reset() {
    
    document.getElementById("bill").value = "";
    document.querySelector('.button_discount').value = "";
    document.getElementById("total_tip").innerHTML = "$0.00"; 
    document.getElementById("people").value = "";
    document.getElementById("total_person").innerHTML = "$0.00"; 

}