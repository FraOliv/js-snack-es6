/* //Arrow functions somma numbers:

const sum = (a, b) => {
    return a + b
}


//Arrow functions random numbers:

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


////Arrow functions on click event listener


document.addEventListener("click", () => console.log("click"))


//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

//metodo arrow
const reverse = (str) => str.split("").reverse().join("");

let parola = prompt('inserisci una parola');
alert('la tua parola al contrario:\n' + reverse(parola));  





/*  SNACK 5-5 Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che

hanno la posizione compresa tra “a” e “b” */

/* /* Scrivi una funzione che accetti tre argomenti: */
// const ElementsBetweenNumAandNumB = (array,numA,numB) =>{

/* un array e due numeri */
    //let numA;
    //let numB;
   // let array;


 // const ElementsinRange = [];
/* 
grande al massimo quanto il numero di elementi dell’array */
  //for (let i = 0; i <= array.length; i++) {
/*     (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array)   */
   // if (i <= numB && i >= numA )  {
     // ElementsinRange.push(array[i]);
    //}
    /* La funzione ritornerà un nuovo array con i valori che
    hanno la posizione compresa tra “a” e “b” */ 
  //}
  //return ElementsinRange;
//}

//let arrayData = ["Lorena", "Lello", "Giorgiunes", "Fabiunes", "Serena", "Camelia"];
//let startData = 2;
//let endData = 4;
//console.log(ElementsBetweenNumAandNumB(arrayData,startData,endData)); 

function splicer(array, element, index) {
    array.splice(index * 2, 0, element);
    return array;
}



const merge =  (array1, array2) => array1.reduce(splicer, array2.slice());



let array1 = [1,2,3,4,5];
let array2 = ['a', 'b', 'c', 'd', 'e'];
var MergedArray = merge(array1, array2);


console.log(MergedArray);