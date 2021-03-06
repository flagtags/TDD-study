export class TestCase {
  name;
  constructor(name: string) {
    this.name = name;
  }

  run() {
    this[this.name]();
  }
}

export class WasRun extends TestCase {
  name;
  wasRun;
  constructor(name: string) {
    super(name);
    this.wasRun = null;
  }

  testMethod() {
    this.wasRun = 1;
  }
}
