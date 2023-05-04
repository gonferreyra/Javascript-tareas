/*
1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6

1
12
123
1234
12356

para valor 3
1
12
123
*/
/*
function piramid(num) {
  let piramidNumbers = '';
  for (let i = 1; i <= num; i++) {
    piramidNumbers += i;
    console.log(`i ${i}, ${piramidNumbers}`);
  }
}
// let test = piramid(6);
console.log(piramid(6));
*/
/*
2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true]
*/

/*

const array3 = [4, 3, true, 'manzana'];
const array4 = ['pera', 3, false, true, 3, true];

const compare = (arr1, arr2) => {
  const coincidence = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        if (!coincidence.includes(arr1[i])) {
          coincidence.push(arr1[i]);
        }
      }
    }
  }
  return coincidence;
};

console.log(compare(array3, array4));
*/

/*
3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
*/
/*
class Carrito {
  constructor(montoTotal, productos){
    this.montoTotal = montoTotal,
    this.productos = productos
  }
}
*/

/*
3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}
*/
/*
class Carrito {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = Array(productos);
  }
  agregarProducto(nombre, precio, unidades) {
    let newProduct = {
      nombre,
      precio,
      unidades,
    };
    this.productos.push(newProduct);
    this.montoTotal += newProduct.precio * newProduct.unidades;
  }
}

const carrito = new Carrito(10, 'Leche');
carrito.agregarProducto('Azucar', 10, 2);
console.log(carrito);
*/
/*
3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
*/

class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }
  agregarProducto(nombre, precio, unidades) {
    let repeatedProduct = this.productos.find((prod) => prod.nombre === nombre);
    if (repeatedProduct) {
      console.log(
        `El producto ${repeatedProduct.producto} ya existe con ${repeatedProduct.cantidad} unidades`
      );
      return;
    }

    let newProduct = {
      nombre,
      precio,
      unidades,
    };
    this.productos.push(newProduct);
    this.montoTotal += newProduct.precio * newProduct.unidades;
  }
}

const carrito1 = new Carrito();
carrito1.agregarProducto('leche', 10, 1);
carrito1.agregarProducto('azucar', 5, 2);
carrito1.agregarProducto('azucar', 15, 3);
console.log(carrito1);
