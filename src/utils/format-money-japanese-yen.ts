/**
 * 日本円表記に変換する関数
 *
 * @example
 * - 123456789 → 123,456,789
 * - 123456.789 → 123,457（日本円には小数点以下がないから）
 */
export const formatMoneyJapaneseYen = (amount: number) => {
  const japanYen = new Intl.NumberFormat("ja-JP", { currency: "JPY" });
  return japanYen.format(amount);
};
