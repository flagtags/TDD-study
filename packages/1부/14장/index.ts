export interface Expression {
  reduce: (currency: string, bank: Bank) => Money;
}

export interface Pair {
  from: string;
  to: string;
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

  reduce(currency: string, bank:Bank){

    if( this.currency === currency) {
      return this
    }
    return new Money(this.amount/bank.rate(this.currency,currency), currency);
  }

  static dollar(amount: number) {
    return new Money(amount, 'USD');
  }

  static franc(amount: number) {
    return new Money(amount, 'CHF');
  }
}

export class Bank {
  rates;

  constructor() {
    this.rates = new Map();
  }

  addRate(from: string, to: string, rate: number){
    this.rates.set(from.concat(to), rate);
  }

  rate(from: string, to:string) {
    if(from === to ){
      return 1;
    }
    return this.rates.get(from.concat(to));
  }

  reduce(source: Expression, currency: string){
    return source.reduce(currency, this)
  }
}

export class Sum implements Expression{
  augend
  addend

  constructor(augend:Money, addend:Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(currency: string, bank:Bank){
    return new Money(this.augend.amount + this.addend.amount, currency);
  }
}

