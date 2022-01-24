class Dollar {
  amount;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    this.amount = this.amount * multiplier;
  }
}

export default Dollar;
