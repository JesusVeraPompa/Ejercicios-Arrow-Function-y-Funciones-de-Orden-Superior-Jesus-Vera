//  Llamamos los Datos
import { beers } from "./datos.js";

//  Verificamos los Datos
//console.log(beers);

/* Ejercicio 4
Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false.*/

//  Pedimos los Parametros
let propiedad = prompt(
    "Ingrese el numero segun una Propiedad que desea Buscar = 1.- Nombre (name) / 2.- Fecha Elaboración (first_brewed) / 3.- Alcohol (abv) / 4.- Amargor (ibu) / 5.- Color (srm) / 6.- pH (ph)"
);
let booleano = prompt("Escriba True si desea Buscar de manera ascendente O Escriba False si desea Buscar de manera descendente");

// Generamos la Sentencia if y la Funcion

let nuevoArray = beers
    .sort((a, b) => {
        if (propiedad === "1") {
            if (booleano === "true") {
                return a.name.localeCompare(b.name);
            } else if (booleano === "false") {
                return b.name.localeCompare(a.name);
            }
        } else if (propiedad === "2") {
            if (booleano === "true") {
                return new Date(parseInt(b.first_brewed)) - new Date(parseInt(a.first_brewed));
            } else if (booleano === "false") {
                return new Date(parseInt(a.first_brewed)) - new Date(parseInt(b.first_brewed));
            }
        } else if (propiedad === "3") {
            if (booleano === "true") {
                return a.abv - b.abv;
            } else if (booleano === "false") {
                return b.abv - a.abv;
            }
        } else if (propiedad === "4") {
            if (booleano === "true") {
                return a.ibu - b.ibu;
            } else if (booleano === "false") {
                return b.ibu - a.ibu;
            }
        } else if (propiedad === "5") {
            if (booleano === "true") {
                return a.srm - b.srm;
            } else if (booleano === "false") {
                return b.srm - a.srm;
            }
        } else if (propiedad === "6") {
            if (booleano === "true") {
                return a.ph - b.ph;
            } else if (booleano === "false") {
                return b.ph - a.ph;
            }
        }
    })

    // Devolvemos el Array con los 10 primeros elementos
    .slice(0, 10);

// Mostramos el Resultado
console.log(nuevoArray);

//  Mostramos el HTML con los Resultados
let contenedor = document.getElementById("contenedor");
for (let i = 0; i <= 9; i++) {
    let info = document.createElement("tr");
    info.className = "info";
    info.innerHTML = `
                        <tr>
                            <th scope="row">${i + 1}</th>
                            <td>${nuevoArray[i].name}</td>
                            <td>${nuevoArray[i].first_brewed}</td>
                            <td>${nuevoArray[i].abv}</td>
                            <td>${nuevoArray[i].ibu}</td>
                            <td>${nuevoArray[i].srm}</td>
                            <td>${nuevoArray[i].ph}</td>
                        </tr>
                        `;

    contenedor.appendChild(info);
}
