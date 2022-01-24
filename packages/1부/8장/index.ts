export abstract class Money {
  protected amount

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(obj: Object) {
    const money = obj as Money;
    return money.constructor.name === this.constructor.name
      && this.amount === money.amount;
  }

  abstract times(amount: number)

  static dollar(amount: number) {
    return new Dollar(amount);
  }

  static franc(amount: number) {
    return new Franc(amount);
  }
}

export class Dollar extends Money{
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
}

