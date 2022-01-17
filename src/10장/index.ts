export class Money {
  protected amount;
  protected _currency;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set currency(name: string) {
    this._currency = name;
  }

  equals(obj: Object) {
    const money = obj as Money;
    return money.currency === this.currency && this.amount === money.amount;
  }

  times(multiplier: number) {
    return new Money(this.amount * multiplier, this.currency);
  }

  static dollar(amount: number) {
    return new Money(amount, 'USD');
  }

  static franc(amount: number) {
    return new Money(amount, 'CHF');
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, concurrency: string) {
    super(amount, concurrency);
  }
}
