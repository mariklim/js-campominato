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
function gridCreator(nCell) {
    for (var i = 1; i <= nCell; i++) {
        document.getElementById("camp").innerHTML += `<div class="square">${i}</div>`;
    }
}

// dato un range di numeri, restituisce un numero random
function getRndInteger(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// dato l'array e l'elemento da cercare, restitusce true se l'elemento è presente altrimenti false
// alternativa di arr.includes(elemento)
function inArray(arr, el) {
    var count = 0;

    while (count < arr.length) {
        if (arr[count] == el) {
            return true;
        }

        count++;
    }

    return false;
}

function Play_again(){
    location.reload();
}


//PROGRAMMA PRINCIPALE
// 1. all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// // con difficoltà 0 => tra 1 e 100
// // con difficoltà 1 => tra 1 e 80
// // con difficoltà 2 => tra 1 e 50

// chido all'utente che livello di difficolta vuole giocare tramite tre bottoni (functionfunction Livello0/Livello1/Livello2)


 // numero delle bombe 
 var bombeDefault = 16;
 
// array per salvare delle bombe(numeri)random
var nBombe = [];
    
// var per salvare numure delle cellule della griglia dela campo (100, 80 e 50 cell)
var campo;

// array per i numeri (quadratini) cliccati senza le bombe
var numeriConsentiti = [];

// var per la calcolare se giocatore clicca su tutti cellule senza bombe
var possibilità = campo - bombeDefault;

// livello 0, 100 cellule
function Livello0() {
    // creazione campo

    // livello 0 avrà 100 cellule della griglia
    campo = 100;

    for (var i = 1; i <= campo; i++) {
        document.getElementById("camp").innerHTML += `<div class="square">${i}</div>`;
        document.getElementById("camp").classList.add('clicked');
        document.getElementById("camp").classList.add('shadow');
    }

    // array per salvare delle bombe(numeri)random
    nBombe = [];

    numeriConsentiti = [];

    // ciclo for per generare i numeri random
    while (nBombe.length < bombeDefault) {
        var numeriRandom = getRndInteger(1, campo);
        // verifichiamo se nell array "nBombe" non ci sono ancora i numeri dal "numeriRandom" allora li pushiamo nel array "nBombe"
        if (nBombe.includes(numeriRandom) == false) {
            nBombe.push(numeriRandom);
        }
    }


    document.getElementById("camp").addEventListener("click",
        function (evento) {
        // event.target l'elemnto del dom su cui ho cliccato
        // mi salvo il numero della casella in var "clicked"

            var clicked = parseInt(evento.target.innerHTML);
            // parseInt serve per restituire il tipo del dato numero, altrimenti sarà la stringa
            // e il controllo "== true" non funzionerà, numero preso da DOM è sempre tipo stringa.


            // verifichiamo se il numero cliccato è presente nell'array "nBombe" , se presente hai perso! Stampo punteggio.
            
            if (nBombe.includes(clicked) == true) {
                // alternativa: if ( inArray(nbombe, clicked) == true ) 
                evento.target.classList.add('buzz-out-on-hover');
                evento.target.classList.add('clicked');
                document.getElementById("messagge").innerHTML = ("Colpito! il tuo punteggio: " + numeriConsentiti.length);
                document.getElementById("messagge").classList.add('bg');
            }
            // per non far cliccare due volte lo stesso quadratino:
            //se non è colpito allora cerco se nel array "numeriConsentiti" presente il numero già cliccato
            else if (inArray(numeriConsentiti, clicked) == true) {
                alert("Non puoi cliccare due volte");
            } else {
                // aggiungo numeri cliccati (senza bomba) nell arr "numeriConsentiti"
                evento.target.classList.add('buzz-out-on-hover');
                numeriConsentiti.push(clicked);
                evento.target.classList.add('clicked-save');
                console.log(numeriConsentiti);

                // se il giocatore he cliccato tutti i numeri senza le bombe:
                if (numeriConsentiti.length == possibilità) {
                    alert("Bravissimo!! hai finito il gioco!!");
                    location.reload();
                }

            }
        }
    );


}

// livello 1, 80 cellule
function Livello1() {
    // livello 0 avrà 100 cellule della griglia
    campo = 80;
    // creazione campo
    for (var i = 1; i <= 80; i++) {
        document.getElementById("camp").innerHTML += `<div class="square">${i}</div>`;
    }

    // array per salvare delle bombe(numeri)random
    nBombe = [];

    numeriConsentiti = [];

    // ciclo for per generare i numeri random
    while (nBombe.length < bombeDefault) {
        var numeriRandom = getRndInteger(1, campo);
        // verifichiamo se nell array "nBombe" non ci sono ancora i numeri dal "numeriRandom" allora li pushiamo nel array "nBombe"
        if (nBombe.includes(numeriRandom) == false) {
            nBombe.push(numeriRandom);
        }
    }


    document.getElementById("camp").addEventListener("click",
        function (evento) {
        // event.target l'elemnto del dom su cui ho cliccato
        // mi salvo il numero della casella in var "clicked"

            var clicked = parseInt(evento.target.innerHTML);
            // parseInt serve per restituire il tipo del dato numero, altrimenti sarà la stringa
            // e il controllo "== true" non funzionerà, numero preso da DOM è sempre tipo stringa.


            // verifichiamo se il numero cliccato è presente nell'array "nBombe" , se presente hai perso! Stampo punteggio.
            
            if (nBombe.includes(clicked) == true) {
                // alternativa: if ( inArray(nbombe, clicked) == true )
                evento.target.classList.add('buzz-out-on-hover'); 
                evento.target.classList.add('clicked');
                document.getElementById("messagge").innerHTML = ("Colpito! il tuo punteggio: " + numeriConsentiti.length);
                document.getElementById("messagge").classList.add('bg');
            }
            // per non far cliccare due volte lo stesso quadratino:
            //se non è colpito allora cerco se nel array "numeriConsentiti" presente il numero già cliccato
            else if (inArray(numeriConsentiti, clicked) == true) {
                alert("Non puoi cliccare due volte");
            } else {
                // aggiungo numeri cliccati (senza bomba) nell arr "numeriConsentiti"
                evento.target.classList.add('buzz-out-on-hover');
                numeriConsentiti.push(clicked);
                evento.target.classList.add('clicked-save');
                console.log(numeriConsentiti);

                // se il giocatore he cliccato tutti i numeri senza le bombe:
                if (numeriConsentiti.length == possibilità) {
                    alert("Bravissimo!! hai finito il gioco!!");
                    location.reload();
                }

            }
        }
    );


}

// livello 2, 50 cellule
function Livello2() {
    // livello 2 avrà 100 cellule della griglia
    campo = 50;
    // creazione campo
    for (var i = 1; i <= campo; i++) {
        document.getElementById("camp").innerHTML += `<div class="square">${i}</div>`;
    }

    // array per salvare delle bombe(numeri)random
    nBombe = [];

    numeriConsentiti = [];

    // ciclo for per generare i numeri random
    while (nBombe.length < bombeDefault) {
        var numeriRandom = getRndInteger(1, campo);
        // verifichiamo se nell array "nBombe" non ci sono ancora i numeri dal "numeriRandom" allora li pushiamo nel array "nBombe"
        if (nBombe.includes(numeriRandom) == false) {
            nBombe.push(numeriRandom);
        }
    }


    document.getElementById("camp").addEventListener("click",
        function (evento) {
        // event.target l'elemnto del dom su cui ho cliccato
        // mi salvo il numero della casella in var "clicked"

            var clicked = parseInt(evento.target.innerHTML);
            // parseInt serve per restituire il tipo del dato numero, altrimenti sarà la stringa
            // e il controllo "== true" non funzionerà, numero preso da DOM è sempre tipo stringa.


            // verifichiamo se il numero cliccato è presente nell'array "nBombe" , se presente hai perso! Stampo punteggio.
            
            if (nBombe.includes(clicked) == true) {
                // alternativa: if ( inArray(nbombe, clicked) == true ) 
                evento.target.classList.add('clicked');
                evento.target.classList.add('buzz-out-on-hover');
                document.getElementById("messagge").innerHTML = ("Colpito! il tuo punteggio: " + numeriConsentiti.length);
                document.getElementById("messagge").classList.add('bg');
                // location.reload();
            }
            // per non far cliccare due volte lo stesso quadratino:
            //se non è colpito allora cerco se nel array "numeriConsentiti" presente il numero già cliccato
            else if (inArray(numeriConsentiti, clicked) == true) {
                alert("Non puoi cliccare due volte");
            } else {
                // aggiungo numeri cliccati (senza bomba) nell arr "numeriConsentiti"
                numeriConsentiti.push(clicked);
                evento.target.classList.add('buzz-out-on-hover');
                evento.target.classList.add('clicked-save');
                console.log(numeriConsentiti);

                // se il giocatore he cliccato tutti i numeri senza le bombe:
                if (numeriConsentiti.length == possibilità) {
                    alert("hai finito il gioco!!");
                    location.reload();
                }

            }
        }
    );


}

