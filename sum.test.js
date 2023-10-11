//  import `test` and `expect` functions from Vitest

import { test, expect } from "vitest"

//  import the `sum` function from sum.js

import { sum } from "./sum.js"


//  create a bare bones test


//  run Vitest to check that it detects and passes the new test
//  inside the test:
//      call the sum function with arguments: 5 and 7
//      assert that the value returned is 12

test("testing sum with 5 and 7", function(){
    const total = sum(5,7);
    const expected = 12;
    expect(total).toBe(expected);
});