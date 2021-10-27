type IdFactory = Generator<int, int, int>

export class GeneratorService {

  private _factory?: IdFactory

  constructor(private seed = 0) {
  
  }

  public static randomNumber<T extends number = number>(_min: T, _max: T) {
    return Math.floor(Math.random() * Math.floor(_max + 1)) || _min
  }

  public static randomString(_length: uint16 = 8): string {
    if (!_length || _length < 1)
      throw new Error("Invalid randomized string length: " + _length)
    let _string: string = ''
    while (_string.length < _length)
      _string += Math.random().toString(36).substring(2, _length - _string.length)
    return _string
  }

  private *idFactory(): IdFactory {
    while (true) {
      this.seed++
      yield this.seed
    }
  }

  private getFactory(): IdFactory {
    if (!this._factory) {
      this._factory = this.idFactory()
    }
    return this._factory
  }

  public generateNumericId(): number {
    return this.getFactory().next().value as number
  }

  public generateId(): string {
    return this.generateNumericId().toString(16)
  }

}
