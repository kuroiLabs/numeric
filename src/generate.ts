type IdFactory = Generator<int, int, int>

let _generator: IdFactory

function *idFactory(): IdFactory {
  let _init: number = Date.now()
  while (true) {
    yield _init++
  }
}

// returns singleton instance
function getFactory(): IdFactory {
  if (!_generator) {
    _generator = idFactory()
  }
  return _generator
}

/** Returns an incrementally generated integer */
export function generateNumericId(): int {
  return getFactory().next().value as int
}

/** Returns an incrementally generated integer as a hex string */
export function generateId(): string {
  return generateNumericId().toString(16)
}

/** Returns random number within range */
export function randomNumber<T extends number = number>(_min: T, _max: T) {
  return Math.floor(Math.random() * Math.floor(_max + 1)) || _min
}

/** Returns a randomized string up to a  */
export function randomString(_length: uint16 = 8): string {
  if (!_length || _length < 1)
    throw new Error("Invalid randomized string length: " + _length)
  let _string: string = ''
  while (_string.length < _length)
    _string += Math.random().toString(36).substring(2, _length - _string.length)
  return _string
}
