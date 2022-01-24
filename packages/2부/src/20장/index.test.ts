// test setup 호출하기
// 여러 테스트들이 서로 영향을 끼치지 않도록 하기 위해 setup 메소드 생성

import { WasRun, TestCase } from './index';
import assert from 'assert';

export class TestCaseTest extends TestCase {
  test;

  constructor(name: string) {
    super(name);
  }

  setup() {
    this.test = new WasRun('testMethod');
  }

  testSetup() {
    this.test.run();
    assert(this.test.wasSetup);
  }

  testRunning() {
    this.test.run();
    assert(this.test.wasRun);
  }
}

const main = () => {
  new TestCaseTest('testRunning').run();
  new TestCaseTest('testSetup').run();
};

export default main;
