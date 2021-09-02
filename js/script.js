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

// 1. Creo una funzione che crea il campo e lo "disegna".
// 2. Creo una var con (numeri) delle bombe  nel range predefinito, i numeri non si devono ripetere.
// 3. Creo un evento click, l'utente clicca su una cell e scopre:
// 3a. Se ha beccato la bomba il gioco si interompe
// 3b. Altrimenti può continuare a giocare, non può clicare di nuovo la stessa cell
// 4. Salvo i dati dei click ("non bomba") in una var che serve  per il punteggio.
// 5. Stampo il resultato (numero totale delle cellule senza bombe che il giocatore ha cliccato)

// FUNZIONI

// gridCreator crea una griglia e la disegna nel html, ogni "i" è il numero del quadrato.

// function gridCreator(nCell){
//     for (var i = 1; i <= nCell; i++){
//         document.getElementById("camp").innerHTML += `<div class="square">${i}</div>`;
//         } 
// }

function getRndInteger(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
  }
// getRndInteger(1, 5)  
// console.log(randomNumber);

// function checkElem(array, element)
// {
//   var trovato = false;

//   for (var i = 0; i < array.length; i++)
//   {
//     if (array[i] == element)
//     {
//       trovato = true;
//     }
//   }
//   return trovato;
// }

//PROGRAMMA PRINCIPALE
// 1. Creo campo
var camp =  []
for (var i = 1; i <= 20; i++){
    document.getElementById("camp").innerHTML += `<div class="square">${i}</div>`;
    camp.push(i);
    }
    console.log(camp);
// gridCreator(camp);

// 2. Il computer deve generare 5 numeri casuali tra 1 e 20 (bombe)
// ??I numeri non possono essere duplicati??
var nBombe = [4,5,11];
// for (var i = 0; i < "5; i++){
//     var numeriRandom = getRndInteger(1, 20);
//     nBombe.push(numeriRandom);
// }
console.log(nBombe);

// 3. Evento Click
var arrNumeriCliccati = [];
document.getElementById("camp").addEventListener("click",
    function(event){
        var numeriCliccati = event.target.innerHTML;
        if (numeriCliccati !== nBombe[i]){
            arrNumeriCliccati.push(numeriCliccati);
            console.log(arrNumeriCliccati);
        }
    });
// Voglio verrificare se qunado utente clica su un quadrato trova quello con la




