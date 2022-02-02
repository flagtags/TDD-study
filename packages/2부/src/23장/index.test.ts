// testSuite 만들기

import { WasRun, TestCase, TestResult, TestSuite } from './index';
import assert from 'assert';

const expect = (msg: string, testingValue: any) => {
  return {
    toBe: (fixedValue: any) => {
      console.log(`${msg}: `, testingValue === fixedValue ? 'success' : 'failed');
      if (testingValue !== fixedValue) {
        throw new Error(`${msg} error`);
      }
    },
  };
};

export class TestCaseTest extends TestCase {
  test;
  result;
  suite;

  constructor(name: string) {
    super(name);
  }

  setup() {
    this.result = new TestResult();
  }

  testSuiteTest() {
    this.suite = new TestSuite();

    this.suite.add(new WasRun('testMethod'));
    this.suite.add(new WasRun('testBrokenMethod'));
    this.suite.run(this.result);

    expect('testSuite', this.result.summary()).toBe('2 run 1 failed');
  }

  testTemplateMethod() {
    this.test = new WasRun('testMethod');

    this.test.run(this.result);

    expect('testTemplateMethod', this.test.log).toBe('setUp testMethod tearDown ');
  }

  testResult() {
    this.test = new WasRun('testMethod');

    this.test.run(this.result);

    expect('testResult', this.result.summary()).toBe('1 run 0 failed');
  }

  testFailedResult() {
    this.test = new WasRun('testBrokenMethod');

    this.test.run(this.result);

    expect('testFailedResult', this.result.summary()).toBe('1 run 1 failed');
  }

  testFailedResultFormatting() {
    this.result = new TestResult();
    this.result.testStarted();
    this.result.testFailed();

    expect('testFailedResultFormatting', this.result.summary()).toBe('1 run 1 failed');
  }

  testSetupFailed() {
    this.test = new WasRun('testMethod');
    this.test.setup = () => {
      throw new Error();
    };

    this.test.run(this.result);
    console.log(this.result.summary());

    expect('testSetupFailed', this.result.summary()).toBe('1 run 1 setup error occured');
  }
}

const main = () => {
  const result = new TestResult();

  const testSuite = new TestSuite();
  testSuite.add(new TestCaseTest('testTemplateMethod'));
  testSuite.add(new TestCaseTest('testResult'));
  testSuite.add(new TestCaseTest('testFailedResult'));
  testSuite.add(new TestCaseTest('testFailedResultFormatting'));
  testSuite.add(new TestCaseTest('testSetupFailed'));
  testSuite.add(new TestCaseTest('testSuiteTest'));

  testSuite.run(result);
  console.log(result.summary());

  // expect('sweet tests', result.summary()).toBe('5 run 3 failed');
};

export default main;
