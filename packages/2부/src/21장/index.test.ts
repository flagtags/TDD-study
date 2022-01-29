// 나중에 tearDown() 호출하기
// 수집한 결과를 출력하기

import { WasRun, TestCase } from './index';
import assert from 'assert';

export class TestCaseTest extends TestCase {
  test;
  result;

  constructor(name: string) {
    super(name);
  }

  testTemplateMethod() {
    this.test = new WasRun('testMethod');
    this.test.run();
    assert(this.test.log === "setUp testMethod tearDown ");
  }

  testResult() {
    this.test = new WasRun("testMethod");
    this.result = this.test.run();
    assert("1 run 0 failed" === this.result.summary());
  }

  testFailedResult(){
    this.test = new WasRun("testBrokenMethod");
    this.result = this.test.run();
    assert("1 run 1 failed" === this.result.summary())
  }
}

const main = () => {
  new TestCaseTest('testTemplateMethod').run();
  new TestCaseTest('testResult').run();
  // new TestCaseTest('testFailedResult').run();
};

export default main;
