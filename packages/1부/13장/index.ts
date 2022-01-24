export interface Expression {
  reduce: (currency: string) => Money;
}

export class Money implements Expression{
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

  plus(addend: Money){
    return new Sum(this, addend);
  }

  reduce(currency: string){
    return this;
  }

  static dollar(amount: number) {
    return new Money(amount, 'USD');
  }

  static franc(amount: number) {
    return new Money(amount, 'CHF');
  }
}

export class Bank {
  constructor() {
  }

  reduce(source: Expression, currency: string){
    return source.reduce(currency)
  }
}

export class Sum implements Expression{
  augend
  addend

  constructor(augend:Money, addend:Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(currency: string){
    return new Money(this.augend.amount + this.addend.amount, currency);
  }
}

