export default function CountColor(count: number): string {
  const redness: number = count * 10;
  const blueness: number = 255 - redness;
  const color: string = `rgb(${redness}, 0, ${blueness})`;
  return color;
}