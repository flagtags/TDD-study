export interface Expression {
  reduce: (currency: string, bank: Bank) => Money;
  equals: (obj: Object) => boolean;
  plus: (addend: Expression) => Expression;
  times: (multiplier: number) => Expression;
}

export interface Pair {
  from: string;
  to: string;
}

export class Money implements Expression{
  protected _amount;
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

  get amount(){
    return this._amount;
  }

  set amount(num: number) {
    this._amount = num;
  }

  equals(obj: Object) {
    const money = obj as Money;
    return money.currency === this.currency && this.amount === money.amount;
  }

  times(multiplier: number) {
    return new Money(this.amount * multiplier, this.currency) as Expression;
  }

  plus(addend: Expression){
    return new Sum(this, addend) as Expression;
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
  augend: Expression
  addend: Expression

  constructor(augend:Expression, addend:Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  equals(obj:Object){
    return null
  }

  plus(addend: Expression){
    return new Sum(this, addend) as Expression;
  }

  times(multiplier: number){
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier)) as Expression;
  }

  reduce(currency: string, bank:Bank){
    const reducedAugend = this.augend.reduce(currency, bank);
    const reducedAddend = bank.reduce(this.addend, currency);
    return new Money(reducedAugend.amount + reducedAddend.amount, currency);
  }
}

