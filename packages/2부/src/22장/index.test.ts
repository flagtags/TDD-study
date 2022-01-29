// 실패 처리하기 : 실패한 테스트에 올바른 결과를 출력

import { WasRun, TestCase, TestResult } from './index';
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

  constructor(name: string) {
    super(name);
  }

  testTemplateMethod() {
    this.test = new WasRun('testMethod');
    this.test.run();
    expect("testTemplateMethod",this.test.log).toBe("setUp testMethod tearDown ");
  }

  testResult() {
    this.test = new WasRun("testMethod");
    this.result = this.test.run();
    expect("testResult",this.result.summary()).toBe("1 run 0 failed");
  }

  testFailedResult(){
    this.test = new WasRun("testBrokenMethod");
    this.result = this.test.run();
    expect("testFailedResult",this.result.summary()).toBe("1 run 1 failed")
  }

  testFailedResultFormatting() {
    this.result = new TestResult();
    this.result.testStarted();
    this.result.testFailed();
    expect("testFailedResultFormatting",this.result.summary()).toBe("1 run 1 failed");
  }

  testSetupFailed() {
    this.test = new WasRun("testMethod");
    this.test.setup = () => {
      throw new Error()
    }
    this.result = this.test.run();
    expect("testSetupFailed", this.result.summary()).toBe("1 run 1 failed")
  }
}

const main = () => {
  new TestCaseTest('testTemplateMethod').run();
  new TestCaseTest('testResult').run();
  new TestCaseTest('testFailedResult').run();
  new TestCaseTest('testFailedResultFormatting').run();
  new TestCaseTest('testSetupFailed').run();
};

export default main;
