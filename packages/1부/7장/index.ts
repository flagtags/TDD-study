export class Money {
  protected amount

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(obj: Object) {
    const money = obj as Money;
    return money.constructor.name === this.constructor.name
      && this.amount === money.amount;
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

