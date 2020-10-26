////// afficher le montant global et le numéro de commande
document.getElementById('total4');
document.getElementById('confirmation4');
const total = parseInt (localStorage.getItem('total'));  //// attribuer une valeur fixe à la variabe total
const confirmation = JSON.parse(localStorage.getItem('confirmation'))
console.log(total, confirmation);
//total4.append(total);
//confirmation4.append(confirmation);
let afficheConfirmation = document.getElementById('confirmation4');
let afficheTotal = document.getElementById('total4');
afficheConfirmation.textContent = 'Votre commande porte le n°  :' + ' ' + confirmation.orderId;    ////  attribuer une valeure à confirmation.orderId
afficheTotal.textContent = 'Le montant total de votre commande est de :' + ' ' + total + ' ' + '€';

localStorage.clear();

////// continuer achats 

function continuerAchats(){   
let continuerAchats = document.getElementById("continuer_achats");
    continuerAchats.addEventListener('click', () =>{
    location = "  index.html";
	});
}   
continuerAchats();