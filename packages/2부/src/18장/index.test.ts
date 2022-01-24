// test 호출 여부를 확인하는 테스트 작성

import { WasRun, TestCase } from './index';
import assert from 'assert';

export class TestCaseTest extends TestCase {
  constructor(name: string) {
    super(name);
  }

  testRunning() {
    const test = new WasRun('testMethod');
    assert(!test.wasRun);
    test.run();
    assert(test.wasRun);
  }
}

const main = () => {
  new TestCaseTest('testRunning').run();
};

export default main;
