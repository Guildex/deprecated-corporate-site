import { formatMoneyJapaneseYen } from "@/utils/format-money-japanese-yen";

export const GOOGLE_MAP_ADDRESS =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.876356098532!2d139.70120503573096!3d35.65846379538141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8427e1c0b1%3A0x78f6e23397061d6f!2z5riL6LC344K544Kv44Op44Oz44OW44Or44K544Kv44Ko44Ki!5e0!3m2!1sja!2sjp!4v1676948522584!5m2!1sja!2sjp";

export const COMPANY_DATA = [
  {
    key: "会社名",
    value: "合同会社Guildex",
  },
  {
    key: "資本金",
    value: `${formatMoneyJapaneseYen(2100000)}円`,
  },
  {
    key: "設立",
    value: "2021年5月25日",
  },
  {
    key: "最高経営責任者",
    value: "大橋 勇",
  },
  {
    key: "事業内容",
    value: "「Bmake（ビーメイク）」企画・開発・運営\nWebアプリケーション及びWebシステム受託開発",
  },
  {
    key: "住所",
    value: "〒150-0002 東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア39F",
  },
];
