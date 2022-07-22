// Au début du fichier on écrit les variables globales et les fonctions
let symboleActuel = null
let aleatoire = Math.floor(Math.random() * 2);
let partieFinie = false;
const joueurPerdant = () => {
    if (symbolActuel = "X") {
        return "O"
    } else {
        return "X"
    }
}
function miseAJourMessageJoueur() {
    let divinfo = document.querySelector("div#tour-joueur");
    // if (symboleActuel === "X") {
    //     divinfo.innerText = "Au joueur X de jouer";
    // } else if (symboleActuel === "O") {
    //     divinfo.innerText = "A O de jouer";
    // }
    // version concaténation
    divinfo.innerText = "C'est au " + symboleActuel + " de jouer";
}
const matchNul = () => {
    // if (!document.querySelectorAll("td:empty")) {
    //     return true
    // }else{
    //     return false;
    // }
    return document.querySelectorAll("td:empty").length === 0;
}
const finirPartie = (message) => {
    partieFinie = true;
    document.querySelector("div#tour-joueur").style.display = "none";
    // problème de vitesse d'execution
    setTimeout(() => alert(message), 0);
}
const victoire = (x, y) => {

    let alignes = 0;
    // Nord - sud
    for (let dir = -2; dir <= 2; dir++) {
        
        if (document.querySelector('#cell-' + x + '-' + (y + dir))
            && document.querySelector('#cell-' + x + '-' + (y + dir)).innerText === symboleActuel) {
            alignes++;
        }
    }
    if (alignes >= 3) {
        return true;
    }
    // Est - ouest
    alignes = 0;
    for (let dir = -2; dir <= 2; dir++) {
        if (document.querySelector('#cell-' + (x + dir) + '-' + y)
            && document.querySelector('#cell-' + (x + dir) + '-' + y).innerText === symboleActuel) {
            alignes++;
        }
    }
    if (alignes >= 3) {
        return true;
    }
    // Sud-est - Nord-ouest
    alignes = 0;
    for (let dir = -2; dir <= 2; dir++) {
        if (document.querySelector('#cell-' + (x + dir) + '-' + (y + dir))
            && document.querySelector('#cell-' + (x + dir) + '-' + (y + dir)).innerText === symboleActuel) {
            alignes++;
        }
    }
    if (alignes >= 3) {
        return true;
    }
    // Sud-ouest - Nord-est
    alignes = 0;
    for (let dir = -2; dir <= 2; dir++) {
        if (document.querySelector('#cell-' + (x + dir) + '-' + (y - dir))
            && document.querySelector('#cell-' + (x + dir) + '-' + (y - dir)).innerText === symboleActuel) {
            alignes++;
        }
    }
    if (alignes >= 3) {
        return true;
    }
    return false;

}


function init() {
    let body = document.querySelector("body");
    let info = document.createElement("div");
    partieFinie = false;
    symboleActuel = aleatoire ? "X" : "O";

    document.querySelectorAll("td").forEach((cell) => {
        cell.onclick = () => {

            jouer(parseInt(cell.id[5]), parseInt(cell.id[7]));
        }
    })


    info.id = "tour-joueur"
    body.append(info);
    miseAJourMessageJoueur()


}
// ancienne fonction jouer
// function jouer(x,y) {
//     let casse = document.querySelector('#cell-'+x+'-'+y);
//     casse.innerText = symboleActuel;
//     console.log(symboleActuel,"err",casse)
// }

// nouvelle fonction jouer
const jouer = (x, y) => {

    if (!partieFinie) {
        let casse = document.querySelector('#cell-' + x + '-' + y);
        if (casse.innerText !== "") {
            alert("Regarde mieux où tu cliques 👨‍🦯")
        } else {
            casse.innerText = symboleActuel;
            if (victoire(x, y)) {
               
                finirPartie("LETSGOOOO (pas toi " + joueurPerdant() + "💩)");
            } else if (matchNul()) {
                finirPartie("c finit m1ss");
            } else {

                if (symboleActuel === "X") {
                    symboleActuel = "O"
                } else {
                    symboleActuel = "X"
                }
                miseAJourMessageJoueur();
            }
        }
        // victoire()  ? alert("LETSGOOOO (pas toi"+joueurPerdant()+")") 

    }


}
init()





























// premier version facile
 //    const cell00 = document.querySelector('#cell-0-0');
    //    const cell10 = document.querySelector('#cell-1-0');
    //    const cell20 = document.querySelector('#cell-2-0');
    //    const cell01 = document.querySelector('#cell-0-1');
    //    const cell11 = document.querySelector('#cell-1-1');
    //    const cell21 = document.querySelector('#cell-2-1');
    //    const cell02 = document.querySelector('#cell-0-2');
    //    const cell12 = document.querySelector('#cell-1-2');
    //     const cell22= document.querySelector('#cell-2-2');
    // cell00.onclick = function() {
    //     jouer(0,0);
    // }
    // cell00.onclick = function() {
    //     jouer(1,0);
    // }