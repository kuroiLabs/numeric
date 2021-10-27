//#region bit ranges
export const BIT_MAX = 1
//#endregion

//#region byte ranges
export const BYTE_MAX: byte = Math.pow(2, 8) - 1
//#endregion

//#region int16 ranges
export const UINT16_MAX: uint16 = Math.pow(2, 15) - 1
export const INT16_MIN: int16 = Math.pow(2, 16) * -1
export const INT16_MAX: int16 = Math.pow(2, 16) * -1
//#endregion

//#region int32 ranges
export const UINT32_MAX: uint32 = Math.pow(2, 31) - 1
export const INT32_MIN: int32 = Math.pow(2, 32) * -1
export const INT32_MAX: int32 = Math.pow(2, 32)
//#endregion

//#region int64 ranges
export const UINT64_MAX: uint64 = Math.pow(2, 63) - 1
export const INT64_MIN: int64 = Math.pow(2, 64) * -1
export const INT64_MAX: int64 = Math.pow(2, 64)
//#endregion

export function isBit(_bit: bit): boolean {
  return typeof _bit === 'boolean' || _bit >= 0 && _bit <= 1
}

export function isByte(_byte: byte): boolean {
  return _byte >= 0 && _byte <= BYTE_MAX
}

export function isInt(_int: int): boolean {
  return Number.isInteger(_int)
}

export function isInt16(_int: int16): boolean {
  return Number.isInteger(_int) && _int >= INT16_MIN && _int <= INT16_MAX
}

export function isUInt16(_uint16: uint16): boolean {
  return Number.isInteger(_uint16) && _uint16 >= 0 && _uint16 <= UINT16_MAX
}

export function isInt32(_int32: int32): boolean {
  return Number.isInteger(_int32) && _int32 >= INT32_MIN && _int32 <= INT32_MAX
}

export function isUInt32(_uint32: uint32): boolean {
  return Number.isInteger(_uint32) && _uint32 >= 0 && _uint32 <= UINT32_MAX
}

export function isInt64(_int64: int64): boolean {
  return Number.isInteger(_int64) && _int64 >= INT64_MIN && _int64 <= INT64_MAX
}

export function isUInt64(_uint64: uint64): boolean {
  return Number.isInteger(_uint64) && _uint64 >= 0 && _uint64 <= UINT64_MAX
}