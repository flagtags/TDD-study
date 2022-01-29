// testSuite 만들기

import { WasRun, TestCase, TestResult, TestSuite } from './index';
import assert from 'assert';

const expect = (msg: string, testingValue: any) => {

  return {
    toBe: (fixedValue: any) => {
      console.log(`${msg}: `, testingValue === fixedValue ? 'success' : 'failed');
    }
  }
}

export class TestCaseTest extends TestCase {
  test;
  result;
  suite;

  constructor(name: string) {
    super(name);
  }

  testSuiteTest(result: TestResult){
    this.suite = new TestSuite();

    this.suite.add(new WasRun('testMethod'))
    this.suite.add(new WasRun('testBrokenMethod'))
    this.suite.run(result);

    console.log(result.summary());
    expect('testSuite',result.summary()).toBe("2 run 1 failed");
  }

  testTemplateMethod(result) {
    this.test = new WasRun('testMethod');
    this.test.run(result);

    expect("testTemplateMethod",this.test.log).toBe("setUp testMethod tearDown ");
  }

  testResult(result) {
    this.test = new WasRun("testMethod");
    this.result = this.test.run(result);
    expect("testResult",this.result.summary()).toBe("1 run 0 failed");
  }

  testFailedResult(result){
    this.test = new WasRun("testBrokenMethod");
    this.result = this.test.run(result);

    expect("testFailedResult",this.result.summary()).toBe("1 run 1 failed")
  }

  testFailedResultFormatting() {
    this.result = new TestResult();
    this.result.testStarted();
    this.result.testFailed();

    expect("testFailedResultFormatting",this.result.summary()).toBe("1 run 1 failed");
  }

  testSetupFailed(result) {
    this.test = new WasRun("testMethod");
    this.test.setup = () => {
      throw new Error()
    }
    this.result = this.test.run(result);

    expect("testSetupFailed", this.result.summary()).toBe("1 run 1 failed")
  }
}

const main = () => {
  const testSweet = new TestCaseTest('testSuiteTest');
  // const testSuite = new TestSuite();
  // testSuite.add(new TestCaseTest('testTemplateMethod'))
  // testSuite.add(new TestCaseTest('testResult'));
  // testSuite.add(new TestCaseTest('testFailedResult'))
  // testSuite.add(new TestCaseTest('testFailedResultFormatting'))
  // testSuite.add(new TestCaseTest('testSetupFailed'))
  const result = new TestResult();
  testSweet.run(result);
  //
  // testSuite.run(result);
  // expect('sweet tests', result.summary()).toBe('5 run 3 failed')
};

export default main;
