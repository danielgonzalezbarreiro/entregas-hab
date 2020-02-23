"use strict";
//EXERCICIO TENDA
const itemNames = ["Camisa", "Pantalon", "Calcetines"];
const itemPrices = [13, 27, 100];

// ### C l a s s   I t e m ###
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // Metodo estatico que genera nuevos items a partir de un nombre
  // y un precio
  static getInventory(names, prices) {
    return names.map((name, index) => {
      return new Item(name, prices[index]);
    });
  }
}

// ### C l a s s   C a r t I t e m ###
class CartItem {
  unit = 1;
  constructor(item) {
    this.item = item
  }
  // Sumar una unidad al articulo
  increase() {
    this.unit++;
  }
}

// ### C l a s s   U s e r ###
class User {
  cart = [];
  constructor(name) {
    this.name = name;
  }
  // Agrega nuevos items al carrito de la compra.
  addToCart(item) {

    //Si esta no carro aumenta
    //Se non engade

    const itemInCart = this.cart.find(i => i.item.name === item.name);

    if (itemInCart) {
      itemInCart.increase();
    } else {
      this.cart.push(new CartItem(item))
    }

  }
  fillCart(limit, catalogue) {
    for (let i = 0; i < limit; i++) {
      const itemIndex = Math.floor(Math.random() * catalogue.length);
      this.addToCart(catalogue[itemIndex])
    }
  }
  pay(shop) {
    shop.checkout(this.cart)
  }
}
class Shop {
  checkout(cart) {
    for (const cartItem of cart) {

    }
  }
}
// Mi lista de items
const myCatalogue = Item.getInventory(itemNames, itemPrices);

// Instanciamos un usuario
const myUser = new User(`Dani`);

// Llamamos al metodo del usuario que se encarga de agregar items al
// carrito del usuario.
myUser.fillCart(5, myCatalogue);
console.log(myUser.cart)
// Comprobamos si se han agregado los items al carrito del usuario.



//EXERCICIO FETCH

/* const divUrl = `https://api.exchangerate-api.com/v4/latest/EUR`

const fetchPromise = fetch(divUrl)

async function getData(url) {
  return await (await fetch(url)).json()
}
async function getData2(url) {
  return await (await fetch(url)).json()
}
getData(divUrl).then((data) => {
  const divEUR = data.rates.EUR
  const divUSD = data.rates.USD
  const divJPY = data.rates.JPY
  console.log(divEUR, divUSD, divJPY)

  const value = +prompt(`Introduce una cantidad`)
  const divOperator = prompt(`Introduce una de estas divisas:EUR, USD, JPY`)
  switch (divOperator) {
    case `EUR`:
      console.log(`${value * divEUR} EUROS y ${value * divJPY} YENS`)
      break
    case `USD`:
      console.log(`${value * divUSD} DOLARES y ${value * divJPY} YENS`)
      break
    case `JPY`:
      console.log(`${value * divJPY} YENS`)
      break
    default:
      console.log(`La divisa introducida no es valida`)
  }
}) */
