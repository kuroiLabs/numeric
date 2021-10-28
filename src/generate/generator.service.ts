import { randomNumber } from "./random-number"
import { randomString } from "./random-string"

export class GeneratorService {

  public randomString = randomString

  public randomNumber = randomNumber

  constructor(private seed = 0) {
  
  }

  public generateNumericId(): number {
    this.seed = this.seed + 1
    return this.seed
  }

  public generateId(): string {
    return this.generateNumericId().toString(16)
  }

}