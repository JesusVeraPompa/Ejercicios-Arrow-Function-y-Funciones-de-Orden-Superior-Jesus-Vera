//  Llamamos los Datos
import { beers } from "./datos.js";

//  Verificamos los Datos
//console.log(beers);

/* Ejercicio 5
Generar una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un  archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden  de cada una de las cervezas.*/

//  Pedimos el ID a buscar
let valorID = parseInt(prompt("Ingrese el ID a Buscar (1 a 25)"));

// Generamos la Funcion
let nuevoArray = beers.find(({ id }) => id === valorID);

//  Mostramos el Resultado
console.log(nuevoArray);

//  Mostramos el HTML con los Resultados
let contenedor = document.getElementById("contenedor");
let info = document.createElement("tr");
info.className = "info";
info.innerHTML = `
                        <tr>
                            <th scope="row">${nuevoArray.id}</th>
                            <td>${nuevoArray.name}</td>
                            <td>${nuevoArray.abv}</td>
                            <td>${nuevoArray.ibu}</td>
                        </tr>
                        `;
contenedor.appendChild(info);
