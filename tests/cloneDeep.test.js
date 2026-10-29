import { describe, it, expect } from "vitest";
import { cloneDeep } from "../src/cloneDeep.js";

describe("cloneDeep", () => {
  it("primitive를 그대로 반환", () => {
    expect(cloneDeep(42)).toBe(42);
    expect(cloneDeep("Hello World")).toBe("Hello World");
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });

  it("flat Object를 복사해 반환", () => {
    const obj = { a: 1, b: 2 };
    const cloned = cloneDeep(obj);

    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });
});
