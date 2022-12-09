import { formatMoneyJapaneseYen } from "../format-money-japanese-yen";

describe("formatMoneyJapaneseYen Function", () => {
  describe("3桁以下の数値（123）を渡した場合", () => {
    test("123の文字列を返すこと", () => {
      const number = 123;
      expect(formatMoneyJapaneseYen(number)).toBe("123");
    });
  });

  describe("4桁以上の数値（123,456,789）を渡した場合", () => {
    test("123,456,789の文字列を返すこと", () => {
      const number = 123456789;
      expect(formatMoneyJapaneseYen(number)).toBe("123,456,789");
    });
  });
});
