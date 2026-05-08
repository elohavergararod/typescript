import {
  calculateMean,
  calculateMedian,
  filterOutliers
} from "./math-utils";

const datos = [10, 12, 14, 15, 100, 13, 11];

console.log("Datos:", datos);

console.log("Media:", calculateMean(datos));
console.log("Mediana:", calculateMedian(datos));

console.log("Sin atípicos (limite 20):", filterOutliers(datos, 20));