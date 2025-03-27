import { hasNewFiscalYearStarted } from "./hasNewFiscalYearStarted";

describe("hasNewFiscalYearStarted", () => {
  afterEach(() => {
    jest.useRealTimers(); // テスト後にタイマーを元に戻す
  });

  test("今日が 2025/04/01 ならば true", () => {
    jest.useFakeTimers().setSystemTime(new Date("2025-04-01"));
    expect(hasNewFiscalYearStarted()).toBe(true);
  });

  test("今日が 2025/03/31 ならば false", () => {
    jest.useFakeTimers().setSystemTime(new Date("2025-03-31"));
    expect(hasNewFiscalYearStarted()).toBe(false);
  });

  test("今日が 2025/05/01 ならば true", () => {
    jest.useFakeTimers().setSystemTime(new Date("2025-05-01"));
    expect(hasNewFiscalYearStarted()).toBe(true);
  });
});
