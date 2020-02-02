"use strict";

//CALCULADORA IF

/*
let operation;
let numberOperator1;
let numberOperator2;
operation = prompt(`Que operación queres facer?`);
numberOperator1 = +prompt(`Introduce un numero`);
numberOperator2 = +prompt(`Introduce otro numero`);

if (operation === `suma`) {
  console.log(numberOperator1 + numberOperator2);
} else if (operation === `resta`) {
  console.log(numberOperator1 - numberOperator2);
} else if (operation === `multiplicacion`) {
  console.log(numberOperator1 * numberOperator2);
} else if (operation === `division`) {
  console.log(numberOperator1 / numberOperator2);
} else if (operation === `potencia`) {
  console.log(numberOperator1 ** numberOperator2);
} else {
  console.log(`Operación non permitida`);
}

//CALCULADORA SWITCH
let operation;
let numberOperator1;
let numberOperator2;
operation = prompt(`Que operación queres facer?`);
numberOperator1 = +prompt(`Introduce un numero`);
numberOperator2 = +prompt(`Introduce otro numero`);

switch (operation) {
  case `suma`:
    console.log(numberOperator1 + numberOperator2);
    break;
    case `resta`:
      console.log(numberOperator1 - numberOperator2);
      break;
      case `multiplicacion`:
        console.log(numberOperator1 * numberOperator2);
        break;
        case `division`:
          console.log(numberOperator1 / numberOperator2);
          break;
          case `potencia`:
            console.log(numberOperator1 ** numberOperator2);
            break;
            default:
              console.log(`Operación non permitida`);
    break;
  }
  //MEDIA MAS ALTA
  
  function mediaTeamMaria(match1, match2, match3) {
    return (match1 + match2 + match3) / 3;
  }
  
  function mediaTeamPaula(match1, match2, match3) {
    return (match1 + match2 + match3) / 3;
  }
  
  function mediaTeamRebeca(match1, match2, match3) {
    return (match1 + match2 + match3) / 3;
  }
  
  console.log(
    Math.max(
      mediaTeamMaria(62, 34, 55),
      mediaTeamPaula(35, 60, 59),
      mediaTeamRebeca(40, 39, 63)
      )
      );
      */

//DADO

function dice() {
  return Math.floor(Math.random() * 6 + 1);
}
//  NON O DEI ACABADO NON SEI PORQUE NON ME FUNCIONA :(
function throwDice() {
  const diceResult = dice();
  for (let i = 0; totalPoints <= 50; i++) {
    totalPoints += diceResult;
    console.log(
      `Tirada ${i}: ha salido un ${diceResult}! Has ganado un total de ${totalPoints}`
    );
    if (totalPoints < 50) {
      return;
    } else if (totalPoints >= 50) {
      console.log(
        `Enhroabuena, ha salido un ${diceResult}! Has ganado con un total de ${totalPoints} puntos!`
      );
    }
  }
}
