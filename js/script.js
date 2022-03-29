const mailingList = [
  "boolean@careers.it",
  "lorem@careers.it",
  "ipsum@careers.it",
];

let yourMail = prompt("inserire indirizzo e-mail ( boolean@careers.it )");

let trovata = false;

for (let m = 0; m < mailingList.length; m++) {
  
  if (mailingList[m] == yourMail) {
    trovata = true;
  }
}

if (trovata) {
  alert("email valida, benvenuto!");

} else {
  alert("email non registrata, accesso negato");
  let body = document.body;

  body.classList.add("hidden");
  
}

// gioco dei dadi

//definisco i giocatori

const player1 = "Giocatore 1";
const player2 = "Giocatore 2";

// funzione per lanciare i dadi

function rollTheDice() {

  // genero due numeri casuali da 1 a 6

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // uso i numeri generati per richiamare l'immagine dado corrispondente

  document
    .querySelector(".img1")
    .setAttribute("src", "./img/dice" + randomNumber1 + ".png");

  document
    .querySelector(".img2")
    .setAttribute("src", "./img/dice" + randomNumber2 + ".png");

  // controllo se i numeri ottenuti sono pari, se si stampo "Pari!"

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Pari!";
  }

  // controllo se il numero 1 è minore di numero 2, se si stampo "Giocatore 2 ha vinto!"

  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = player2 + " ha vinto!";
  }

  //  se numero 1 non è uguale a numero 2 e non è minore di numero 2, allora stampo "Giocatore 1 ha vinto!"

  else {
    document.querySelector("h1").innerHTML = player1 + " ha vinto!";
  }
}
