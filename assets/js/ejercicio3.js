//  Llamamos los Datos
import { beers } from "./datos.js";

//  Verificamos los Datos
//console.log(beers);

/* Ejercicio 3
Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas.*/

// Generamos la Funcion
let nuevoArray = beers
    .filter((datos) => datos.abv)
    .sort((a, b) => a.abv - b.abv)
    .map((datos) => ({
        nombre: datos.name,
        alcohol: datos.abv,
    }));

//  Mostramos el Resultado
console.log(nuevoArray);


//  Mostramos el HTML con los Resultados
let contenedor = document.getElementById("contenedor");
for (let i = 0; i <= 9; i++) {
    let info = document.createElement("tr");
    info.className = "info";
    info.innerHTML = `
                        <tr>
                            <th scope="row">${i + 1}</th>
                            <td>${nuevoArray[i].nombre}</td>
                            <td>${nuevoArray[i].alcohol}</td>
                        </tr>
                        `;

    contenedor.appendChild(info);
}
