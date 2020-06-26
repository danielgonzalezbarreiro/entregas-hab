"use strict";
//DEVOLVER LA PALABRA DE MAYOR LONGITUD

function letterCount(str) {
  let longWord = str.split(` `).sort((a, b) => {
    return b.length - a.length;
  });
  return longWord[0];
}
//console.log(letterCount(prompt(`Introduce una frase`)));

//CALCULADORA DECIMAL A BINARIO 

function binaryCoverter(str) {
  let decimal = parseInt(str, 2);
  return decimal
}

function binaryConverterArray(str) {
  const strArray = str.split('');
  let decimal = strArray.reduce(
    (accumulator, current, index) => accumulator + current * Math.pow(2, strArray.length - index - 1),
    0
  );
  return decimal;
}

console.log(binaryCoverter());
console.log(binaryConverterArray());



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

//console.log(palindromeTwo());

