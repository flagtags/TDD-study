// 나중에 tearDown() 호출하기
// WasRun 에 로그 문자열 남기기

import { WasRun, TestCase } from './index';
import assert from 'assert';

export class TestCaseTest extends TestCase {
  test;

  constructor(name: string) {
    super(name);
  }

  testTemplateMethod() {
    this.test = new WasRun('testMethod');
    this.test.run();
    assert(this.test.log === "setUp testMethod tearDown ");
  }
}

const main = () => {
  new TestCaseTest('testTemplateMethod').run();
};

export default main;
