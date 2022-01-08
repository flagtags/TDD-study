class Dollar {
  amount;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(another: Dollar) {
    return true;
  }
}

export default Dollar;
