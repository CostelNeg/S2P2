// primo esercizio

function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}

let result = crazySum(2, 2);
console.log(result);

// Esercizio 2

function boundary(n1) {
  if ((n1 >= 20 && n1 <= 100) || n1 === 400) {
    return true;
  } else return false;
}

let resultBoundary = boundary(1);
console.log(resultBoundary);

//Esercizio 3

function reverseString(mystring) {
  const arrayString = mystring.split("");
  const reverseArray = arrayString.reverse();
  const reverseArray1 = reverseArray.join("");
  return reverseArray1;
}
let stringa = reverseString("forza lazio");
console.log(stringa);

//Esercizio 4

function upperFirst(mystring) {
  const arrayString = mystring.split(" ");
  for (let i = 0; i < arrayString.length; i++) {
    arrayString[i] = arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1);
  }
  const newString = arrayString.join(" ");
  return newString;
}
let stringaUpper = upperFirst("ciao a tutti e buona serata");
console.log(stringaUpper);

//Esercizio 5

function giveMeRandom(n) {
  const arrayRandom = [];

    for (let i = 0; i < n; i++) {
      let numero = Math.round(Math.random() * 10);
      arrayRandom.push(numero);
    }
  
  return arrayRandom;
}
let numeroRandom = giveMeRandom(9);
console.log(numeroRandom);

//Esercizio 1 Extra

function area(l1, l2) {
  let area = l1 * l2;
  return area;
}

let areaRetangolo = area( 6, 8);
console.log(areaRetangolo);

//Esercizio 2 Extra 
 
function crazyDiff(n){
    let differenza=Math.abs(n-19)
    if(differenza>19){
        differenza= differenza*3 ;
    }
    return differenza;
}
let differenzaAsoluta = crazyDiff(3);
console.log(differenzaAsoluta);

//Esercizio 3 Extra

 function codify(mystring){
    if(mystring.startsWith('code')){
        return mystring
    } else if(!mystring.startsWith('code')){
        myNewString= 'code'+mystring
        return myNewString
    }
 }
 let string=codify('epicode')
 console.log(string)

 //Esercizio 4 Extra 

 function check3and7(n){
    if(n%3===0 || n%7===0){
        return true;
    }
    return false
 }

 let numeroCheck = check3and7(2)
 console.log(numeroCheck)

 /* ESERCIZIO 5 

 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo
  e l'ultimo carattere.
   
*/
function cutString(stringa){

    let newStringa = stringa.substring(1);
    newStringa = newStringa.substring(0, newStringa.length -1)
    
    return newStringa;
}
let stringaCut = cutString("ciao bell");
console.log(stringaCut)