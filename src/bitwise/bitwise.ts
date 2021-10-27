export function binaryToInt(_bytes: bit[]): int {
  const _binary = _bytes.reverse().map(x => x ? 1 : 0).join('')
  return parseInt(_binary, 2)
}

export function intToBinary(_int: int, _byteLength: byte): bit[] {
  let _bytes: bit[] = new Array(_byteLength)
  for (let i = 0; i < _byteLength; i++) {
    _bytes[i] = !!((_int >> i) & 1)
  }
  return _bytes
}

export function turnBitOn(_bitPosition: int, _int: int): int {
  return _int |= (1 << _bitPosition)
}

export function turnBitOff(_bitPosition: int, _int: int): int {
  return _int &= ~(1 << _bitPosition)
}

export function toggleBit(_bitPosition: int, _int: int): int {
  return _int ^= (1 << _bitPosition)
}

export function checkBit(_bitPosition: int, _int: int): boolean {
  return !!(_int & (1 << _bitPosition))
}