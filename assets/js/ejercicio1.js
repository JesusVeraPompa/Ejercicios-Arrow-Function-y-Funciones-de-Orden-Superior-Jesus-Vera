//  Llamamos los Datos
import { beers } from "./datos.js";

//  Verificamos los Datos
//console.log(beers);

/* Ejercicio 1
Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe
devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe
ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu).*/

//  Pedimos el Valor del Nivel Etílico
let nivelEtílico = prompt("Ingrese Nivel Etílico de (4.1 a 55)");

// Generamos la Funcion
let nuevoArray = beers
    .filter((datos) => datos.abv <= nivelEtílico)
    .map((datos) => ({
        nombre: datos.name,
        alcohol: datos.abv,
        amargor: datos.ibu,
    }));

//  Mostramos el Resultado
console.log(nuevoArray);

//  Mostramos el HTML con los Resultados
let contenedor = document.getElementById("contenedor");
for (let i = 0; i < nuevoArray.length; i++) {
    let info = document.createElement("tr");
    info.className = "info";
    info.innerHTML = `
                        <tr>
                            <th scope="row">${i + 1}</th>
                            <td>${nuevoArray[i].nombre}</td>
                            <td>${nuevoArray[i].alcohol}</td>
                            <td>${nuevoArray[i].amargor}</td>
                        </tr>
                        `;

    contenedor.appendChild(info);
}
