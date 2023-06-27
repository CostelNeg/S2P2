//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("  ");
console.log("***********Esercizio 1 *********** ");
let numero1 = 3;
let numero2 = 5;

if (numero1 > numero2) {
  console.log("il numero piu grande e " + numero1);
} else {
  console.log("il numero piu grande e " + numero2);
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
console.log("  ");
console.log("***********Esercizio 2 *********** ");
let numero = 21;
if (numero < 5) {
  console.log("Tiny");
} else if (numero < 10) {
  console.log("Small");
} else if (numero < 15) {
  console.log("Medium");
} else if (numero < 20) {
  console.log("Large");
} else if (numero >= 20) {
  console.log("Huge");
}

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
console.log("  ");
console.log("***********Esercizio 3 *********** ");
for (let i = 10; i >= 0; i--) {
  if (i === 3) {
    continue;
  } else if (i === 8) {
    continue;
  }
  console.log(i);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
console.log("  ");
console.log("***********Esercizio 11 *********** ");
for (let i = 0; i <= 15; i++) {
  let risultato = i % 2;
  if (risultato > 0) {
    risultato = "Dispari";
  } else {
    risultato = "Pari";
  }
  console.log(i + " " + risultato);
}
/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("  ");
console.log("***********Esercizio 1 Extra*********** ");
let numeroUno = 4;
let numeroDue = 8;
if (numeroUno === 8 || numeroDue === 8) {
  console.log("Il valore di uno dei tuoi numeri e : 8");
} else if (numeroUno + numeroDue === 8 || numeroUno - numeroDue === 8) {
  console.log("il valore dei tuoi due numeri e : 8");
} else {
  console.log("Ci hai provato! :)");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("  ");
console.log("***********Esercizio 2 Extra*********** ");
let totalShoppingCart = 120;
let costoSpedizione = 10;
let finalPrice;
if (finalPrice <= 50) {
  finalPrice = totalShoppingCart + costoSpedizione; 
  console.log("L'ammotare totale e : " + finalPrice);
} else {
 finalPrice = totalShoppingCart;
  console.log("L'ammotare totale incluso di spedizione  e : " + finalPrice);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
console.log("  ");
console.log("***********Esercizio 3 Extra*********** ");
let discountPrice = (totalShoppingCart / 100) * 20;
finalPrice= finalPrice - discountPrice;
finalPriceScontato=finalPrice;
if(finalPriceScontato<=50){
  console.log("Totale dovuto con sconto e spedizione e : "+finalPriceScontato)
} 
else {
  console.log("totale dovuto con sconto e spedizione inclusa e : "+finalPrice)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/
console.log("  ");
console.log("***********Esercizio 4 Extra*********** ");
let gender;
 let isMale=false;
if(isMale===true){
  gender="male";
  console.log( gender)
}
else if(isMale===false){
  console.log(gender = "Female")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
