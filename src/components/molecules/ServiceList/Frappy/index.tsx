import { memo } from "react";
import * as Styled from "../styles";

const FRAPPY_URL = "https://frappy.app/";
const SERVICE_DESCRIPTION =
  "Frappy(フラッピー)は金曜日の0:00から渋谷エリアで始まる48時間限定の恋活・婚活マッチングアプリです。\n48時間限定のプレッシャーが、最速で意味のある会話と速やかな出会いへと導き「マッチングアプリにおける決定疲れ」を解決することを目的としているサービスです。";

const _Frappy = () => {
  return (
    <Styled.Service>
      <Styled.Detail>
        <Styled.ThumbBox>
          <Styled.Thumb src="/images/frappy.png" width="640" height="336" alt="Frappy" />
        </Styled.ThumbBox>
        <Styled.TextBox>
          <Styled.Head>Frappy（フラッピー）: 48時間限定マッチングアプリ</Styled.Head>
          <Styled.ParDescription>{SERVICE_DESCRIPTION}</Styled.ParDescription>
        </Styled.TextBox>
      </Styled.Detail>
      <Styled.LinkBox>
        <Styled.AnchorLink href={FRAPPY_URL} target="_blank" rel="noopener noreferrer">
          詳しくはこちら
        </Styled.AnchorLink>
      </Styled.LinkBox>
    </Styled.Service>
  );
};

export const Frappy = memo(_Frappy);
