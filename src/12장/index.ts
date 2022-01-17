export interface Expression {

}

export class Money implements Expression {
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
    return new Money(this.amount + addend.amount, this.currency);
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
    return Money.dollar(10);
  }
}
