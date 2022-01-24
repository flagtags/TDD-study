export abstract class Money {
  protected amount
  protected _concurrency

  constructor(amount: number, concurrency: string) {
    this.amount = amount;
    this.concurrency = concurrency;
  }

  get concurrency() {
    return this._concurrency;
  }

  set concurrency(name: string){
    this._concurrency = name
  }

  equals(obj: Object) {
    const money = obj as Money;
    return money.constructor.name === this.constructor.name
      && this.amount === money.amount;
  }

  abstract times(amount: number)

  static dollar(amount: number) {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number) {
    return new Franc(amount, 'CHF');
  }
}

export class Dollar extends Money{
  constructor(amount: number, concurrency: string) {
    super(amount, concurrency);
  }

  times(multiplier: number) {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, concurrency: string) {
    super(amount, concurrency);
  }

  times(multiplier: number) {
    return Money.franc(this.amount * multiplier);
  }
}