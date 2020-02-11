"use strict";
//DEVOLVER LA PALABRA DE MAYOR LONGITUD

function letterCount(str) {
  let longWord = str.split(` `).sort((a, b) => {
    return b.length - a.length;
  });
  return longWord[0];
}
console.log(letterCount(prompt(`Introduce una frase`)));

//CALCULADORA DECIMAL A BINARIO // NON FUN CAPAZ DE SACALO AINDA SINTO :(

function binaryCoverter() {
  let myNumber = prompt("Escribe el numero que quieres convertir");
  let splitMyNumber = myNumber.split(``);
  let result = `0`;
  for (let i = 0; i < splitMyNumber.length; i++) {
    if ([i] === 1) {
      return (result += [i] ** 2);
    }
  }
}

console.log(binaryCoverter()); */
 
//PALINDROMOS

function palindromeTwo() {
  let myPalindrome = prompt().toLowerCase();
  myPalindrome = myPalindrome.replace(/ /g, "");
  console.log(myPalindrome);
  for (let i = 0; i < myPalindrome.length; i++) {
    if (myPalindrome[i] != myPalindrome[myPalindrome.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeTwo());


ojo con el hackeo

