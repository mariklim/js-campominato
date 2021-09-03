// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// FUNZIONI

// gridCreator crea una griglia e la disegna nel html, ogni "i" è il numero del quadrato.
function gridCreator(nCell){
    for (var i = 1; i <= nCell; i++){
        document.getElementById("camp").innerHTML += `<div class="square">${i}</div>`;
        } 
}

function getRndInteger(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
  }

//PROGRAMMA PRINCIPALE
// 1. Creo campo
gridCreator(100);

// 2. // Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati
var nBombe = [];
// Con ciclo while array si riempia fino a 16 elementi 
while (nBombe.length<16){
    var numeriRandom = getRndInteger(1, 100);
    if(nBombe.includes(numeriRandom) == false){
        // senza  "== false" non funziona
        nBombe.push(numeriRandom);
    }
}
console.log(nBombe);

// // 3. Evento Click
// document.getElementById("camp").addEventListener("click", 
//     function(evento) {
//         var clicked = parseInt(evento.target.innerHTML);
//         if (nBombe.includes(clicked) == true){
//             alert("colpito!");
//             evento.target.classList.add('clicked');
//         } 
//         else { evento.target;
//                 alert("vivo!");
//                 return evento;
//         }    
// }
// ); 

   
// Voglio verrificare se qunado utente clica su un quadrato trova quello con la





