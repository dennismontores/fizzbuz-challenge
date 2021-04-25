import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { fizbuzzApp } from './index.ts';

Deno.test({
  name: "it should be print \"FizzBuzz\" at the last position if is divisible by 3 and 5",
  fn(): void {
    const expected = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
    assertEquals(fizbuzzApp(15), expected);
  },
});

Deno.test({
  name: "it should be print \"Fizz\" at the last position if is divisible by 3",
  fn(): void {
    const expected = ["1","2","Fizz"]
    assertEquals(fizbuzzApp(3), expected);
  },
});

Deno.test({
  name: "it should be print \"Buzz\" at the last position if is divisible by 5",
  fn(): void {
    const expected = ["1","2","Fizz","4","Buzz"]
    assertEquals(fizbuzzApp(5), expected);
  },
});