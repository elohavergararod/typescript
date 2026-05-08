import {
  calcularMedia,
  calcularMediana,
  filtrarAtipicos
} from "./math-utils";

const datos = [10, 12, 14, 15, 100, 13, 11];

console.log("Datos:", datos);

console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));

console.log("Sin atípicos (limite 20):", filtrarAtipicos(datos, 20));