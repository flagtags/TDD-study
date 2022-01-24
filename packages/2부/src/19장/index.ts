export class TestCase {
  name;
  constructor(name: string) {
    this.name = name;
  }

  run() {
    this.setup();
    this[this.name]();
  }

  setup() {
    return null;
  }
}

export class WasRun extends TestCase {
  name;
  wasRun;
  wasSetup;
  constructor(name: string) {
    super(name);
    this.wasRun = null;
  }

  testMethod() {
    this.wasRun = 1;
  }

  setup() {
    this.wasSetup = 1;
    this.wasRun = null;
  }
}
