'use strict'
// Declaramos constantes para a URL, selecionar os input, button e os select

const URL = "https://api.exchangerate-api.com/v4/latest/EUR";
const ammount = document.querySelector('input#ammount');
const divtoconvert = document.querySelector('select#divtoconvert');
const converteddiv = document.querySelector('select#converteddiv');
const button = document.querySelector('button#convert');
const result = document.querySelector('input#result');

// Funcion asincrona que carga os datos da API
async function getData(url) {
  const response = await fetch(url);
  const json = await response.json()

  return json;
}

// Funcion que xenere os option para os selects e os engada

getData(URL).then((data) => {
  // Facemos un For in para recorrer todas as rates do obxecto que nos da o server
  for (const rate in data.rates) {
    // Creamos un option por cada rate
    const optionDivToConvert = document.createElement('option');
    const optionConvertedDiv = document.createElement('option');
    // Endimoslle o value 'rate' a cada option
    optionDivToConvert.setAttribute('value', rate);
    optionConvertedDiv.setAttribute('value', rate);
    // Escribimos os rates nas options
    optionDivToConvert.text = rate;
    optionConvertedDiv.text = rate;
    // Facemoslle apend o select
    divtoconvert.append(optionDivToConvert);
    converteddiv.append(optionConvertedDiv);
  }
});

// Facemos a funcion para convertir as divisas

function convert() {
  const divFrom = divtoconvert.value;
  const divTo = converteddiv.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${divFrom}`)
    .then((data) => data.json())
    .then((data) => {
      const rate = data.rates[divTo];
      result.value = `${(ammount.value * rate)} ${converteddiv.value}`
    })
}
// Facemos a funcion para engadir un evento o click e saber que DIV selecciona

button.addEventListener('click', () => {
  if (ammount.value) {
    convert();
  } else {
    ammount.value = 0;
    convert();
  }
})

