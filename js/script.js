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

// dato un range di numeri, restituisce un numero random
function getRndInteger(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
  }

// dato l'array e l'elemento da cercare, restitusce true se l'elemento è presente altrimenti false
// alternativa di arr.includes(elemento)
  function inArray(arr, el) {
	var count = 0;

	while ( count < arr.length ) {
		if ( arr[count] == el ) {
			return true;
		}
		
		count++;
	}

	return false;
}  

//PROGRAMMA PRINCIPALE
// 1. all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// // con difficoltà 0 => tra 1 e 100
// // con difficoltà 1 => tra 1 e 80
// // con difficoltà 2 => tra 1 e 50

// chido all'utente che livello di difficolta vuole giocare
var livello = prompt("Scegli livello tra 0, 1 o 2");
var campo;
console.log(livello);

if(livello == 0){
    var campo = 100;
}else if (livello == 1){
    var campo = 80;
}else if (livello == 2){
    var campo = 50;
}


// 1a. Creo campo
gridCreator(campo);

// 2. // Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati

// creo una array vuota dove salverò le bommbe (numeri random) generati dal pc
var bombeDefault = 16; 
// numero totale delle bombe che andiamo a generare

var nBombe = [];
// qua salveremo questi numeri generati

// Con ciclo while e controllo con .includes() array nBombe si riempia fino a 16 elementi, con FOR si puo' fare ma
// se ci sono "doppioni" non li mette nell array e quindi c'è probabilità che il numero totale sarà meno di 16!
while (nBombe.length<bombeDefault){
    var numeriRandom = getRndInteger(1, campo);
    if(nBombe.includes(numeriRandom) == false){
        // senza  "== false o true" non funziona!!!!!

        // _____________________________________________
        // in alternativa si può usare la funzione inArray(l'abbiampo creato prima)
        // if ( inArray(nBombe, numeriRandom) == false

        // cosa fa:
        // function inArray(nBombe, numeriRandom) {
        //     var count = 0;
        
        //     while ( count < nBombe.length ) {
        //         if ( nBombe[count] == numeriRandom ) {
        //             return true;
        //         }
                
        //         count++;
        //     }
        
        //     return false;
        // }  
        // ______________________________________________

        nBombe.push(numeriRandom);
    }
}
console.log(nBombe);

// 3. Evento Click
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.

// creo una var per salvare i numeri "consentiti" che cliccerà il giocatore:
var possibilità = campo - bombeDefault;
var numeriConsentiti = []; 

document.getElementById("camp").addEventListener("click", 
    function(evento) {
    // event.target l'elemnto del dom su cui ho cliccato
	// mi salvo il numero della casella in var clicked 

    var clicked = parseInt(evento.target.innerHTML);
    // parseInt serve per restituire il tipo del dato numero, altrimenti sarà la stringa
    // e il controllo "== true" non funzionerà, numero preso da DOM è sempre tipo stringa.
        

    // se il numero cliccato è presente nell'array delle bombe, hai perso!allora  stampo il punteggio
    if (nBombe.includes(clicked) == true){
    // alternativa: if ( inArray(nbombe, clicked) == true ) 
            evento.target.classList.add('clicked');
            alert("Colpito!il tuo punteggio: " + numeriConsentiti.length);
			location.reload();
        } 
        //se non è colpito allora cerco se nel array numeriConsentiti presente il numero già cliccato
        else if ( inArray(numeriConsentiti, clicked) == true ) {
			alert("Non puoi cliccare due volte");
		}else{
        // aggiungo numeri cliccati (senza bomba) nell arr numeriConsentiti
        numeriConsentiti.push(clicked);
        evento.target.classList.add('clicked-save');
        console.log(numeriConsentiti);

        if (numeriConsentiti.length == possibilità){
            alert("Bravissimo!! hai finito il gioco!!");
            location.reload();
        }

        }
}
); 







