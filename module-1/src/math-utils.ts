export function calcularMedia(array: number[]): number | null {
  if (array.length === 0) return null;

  const suma = array.reduce((acc, val) => acc + val, 0);
  return suma / array.length;
}

export function calcularMediana(array: number[]): number | null {
  if (array.length === 0) return null;

  const ordenado = [...array].sort((a, b) => a - b);
  const mitad = Math.floor(ordenado.length / 2);

  if (ordenado.length % 2 === 0) {
    return (ordenado[mitad - 1] + ordenado[mitad]) / 2;
  }

  return ordenado[mitad];
}

export function filtrarAtipicos(array: number[], limite: number): number[] {
  if (array.length === 0) return [];

  const media = calcularMedia(array);
  if (media === null) return [];

  return array.filter(num => Math.abs(num - media) <= limite);
}