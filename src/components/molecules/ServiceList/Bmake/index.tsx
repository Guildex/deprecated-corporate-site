import { memo } from "react";
import * as Styled from "../styles";

const SERVICE_DESCRIPTION =
  "マークダウンからお手軽に同人誌の製本データを作成できるアプリケーションです。\n現在エンジニア界隈ではソフトウェアエンジニア・ハードウェアエンジニア等の各々持っている知見を同人誌という形で書籍に落とし込んで同人誌即売会で出展することが流行しており、エンジニア間の新たなコミュニティの形成や商業誌では得られないないような知見と出会えたりと様々な恩恵が得られる場です。\n当サービスでは書籍を執筆する際の様々な障壁を排除し、エンジニア間の知見共有を加速させてエンジニア市場のスキルの平均値を向上させていくことを目的として運営しております。";

const _Bmake = () => {
  return (
    <Styled.Service>
      <Styled.Detail>
        <Styled.ThumbBox>
          <Styled.Thumb src="/images/twitter_card.png" width="640" height="336" alt="Bmake" />
        </Styled.ThumbBox>
        <Styled.TextBox>
          <Styled.Head>Bmake（ビーメイク）</Styled.Head>
          <Styled.ParDescription>{SERVICE_DESCRIPTION}</Styled.ParDescription>
        </Styled.TextBox>
      </Styled.Detail>
      <Styled.LinkBox>
        <Styled.Link as="button" isDisabled>
          このサービスは終了しました
        </Styled.Link>
      </Styled.LinkBox>
    </Styled.Service>
  );
};

/**
 * マークダウンからお手軽に同人誌の製本データを作成できるアプリケーションサービス
 */
export const Bmake = memo(_Bmake);
