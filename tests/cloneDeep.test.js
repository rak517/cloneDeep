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

  it("중첩 객체를 깊게 복사", () => {
    const obj = { a: { b: { c: 1 } } };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.a).not.toBe(obj.a);
    expect(cloned.a.b).not.toBe(obj.a.b);
  });

  it("flat 배열을 복사해 반환", () => {
    const arr = [1, 2, 3];
    const cloned = cloneDeep(arr);

    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
  });

  it("중첩 배열을 깊게 복사", () => {
    const arr = [1, 2, [3, 4]];
    const cloned = cloneDeep(arr);

    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  it("Date를 복사", () => {
    const date = new Date("2026-11-11");
    const cloned = cloneDeep(date);

    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
    expect(cloned instanceof Date).toBe(true);
  });

  it("Map을 복사", () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    const cloned = cloneDeep(map);

    expect(cloned).toEqual(map);
    expect(cloned).not.toBe(map);
    expect(cloned instanceof Map).toBe(true);
  });

  it("Set을 복사", () => {
    const set = new Set([1, 2, 3]);
    const cloned = cloneDeep(set);

    expect(cloned).toEqual(set);
    expect(cloned).not.toBe(set);
    expect(cloned instanceof Set).toBe(true);
  });
});
