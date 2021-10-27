import { IdFactory } from "./id-factory.type"
import { randomNumber } from "./random-number"
import { randomString } from "./random-string"

export class GeneratorService {

  private _factory?: IdFactory

  public randomString = randomString

  public randomNumber = randomNumber

  constructor(private seed = 0) {
  
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