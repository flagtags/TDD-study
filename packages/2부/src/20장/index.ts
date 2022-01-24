export class TestCase {
  name;
  constructor(name: string) {
    this.name = name;
  }

  run() {
    this.setup();
    this[this.name]();
    this.tearDown();
  }

  setup() {
    return null;
  }

  tearDown() {
    return null;
  }
}

export class WasRun extends TestCase {
  name;
  wasRun;
  wasSetup;
  log;

  constructor(name: string) {
    super(name);
    this.wasRun = null;
  }

  testMethod() {
    this.wasRun = 1;
    this.log = this.log + "testMethod ";
  }

  setup() {
    this.wasSetup = 1;
    this.log = "setUp "
    this.wasRun = null;
  }

  tearDown(){
    this.log = this.log + "tearDown "
  }
}
