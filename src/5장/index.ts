export class Dollar {
  private amount;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(another: Dollar) {
    return this.amount === another.amount;
  }
}

export class Franc {
  private amount;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  equals(another: Franc) {
    return this.amount === another.amount;
  }
}

