export function calculateMean(array: number[]): number | null {
  if (array.length === 0) return null;

  const sum = array.reduce((acc, value) => acc + value, 0);
  return sum / array.length;
}

export function calculateMedian(array: number[]): number | null {
  if (array.length === 0) return null;

  const sorted = [...array].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

export function filterOutliers(array: number[], limit: number): number[] {
  if (array.length === 0) return [];

  const mean = calculateMean(array);
  if (mean === null) return [];

  return array.filter(num => Math.abs(num - mean) <= limit);
}