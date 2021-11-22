export function randomString(_length: uint16 = 8): string {
  if (!_length || _length < 1)
    throw new Error("Invalid randomized string length: " + _length)
  let _string: string = ""
  while (_string.length < _length)
    _string += Math.random().toString(36).substring(2)
  return _string.substring(0, _length)
}