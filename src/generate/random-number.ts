export function randomNumber<T extends number = number>(_min: T, _max: T) {
  return Math.floor(Math.random() * Math.floor(_max + 1)) || _min
}