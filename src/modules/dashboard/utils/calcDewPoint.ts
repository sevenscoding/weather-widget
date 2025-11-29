export function calcDewPoint(temp: number, humidity: number): number {
  const a = 17.27
  const b = 237.7

  const alpha = (a * temp) / (b + temp) + Math.log(humidity / 100)
  const dp = (b * alpha) / (a - alpha)

  return Math.round(dp)
}
