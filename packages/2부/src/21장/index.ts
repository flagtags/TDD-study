export class TestCase {
  name;
  constructor(name: string) {
    this.name = name;
  }

  run() {
    this.setup();
    this[this.name]();
    this.tearDown();
    const result = new TestResult();
    result.testStarted();
    return result;
  }

  setup() {
    return null;
  }

  tearDown() {
    return null;
  }
}

export class TestResult {
  runCount;

  constructor() {
    this.runCount = 0;

  }

  testStarted(){
    this.runCount += 1;
  }

  summary(){
    return `${this.runCount} run 0 failed`
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

  testBrokenMethod(){
    throw new Error('broken test');
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
