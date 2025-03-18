import { sum } from "@/sum";
import { it, expect } from "vitest";

it("sum", () => {
  expect(sum(1, 2)).toBe(3);
});
