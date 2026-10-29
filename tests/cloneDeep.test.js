import { describe, it, expect } from "vitest";
import { cloneDeep } from "../src/cloneDeep.js";

describe("cloneDeep", () => {
  it("primitive를 그대로 반환", () => {
    expect(cloneDeep(42)).toBe(42);
    expect(cloneDeep("Hello World")).toBe("Hello World");
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });
});
