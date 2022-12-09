import * as React from "react";

import { Container, LinkList, LinkBox, Link, Head, Desc, Service, Detail, ThumbBox, Thumb, TextBox } from "./styles";

export const ServiceList: React.FC = () => {
  const services = [
    {
      id: 1,
      href: "https://bmake.io",
      head: "Bmake（ビーメイク）",
      desc: "マークダウンからお手軽に同人誌の製本データを作成できるアプリケーションです。\n現在エンジニア界隈ではソフトウェアエンジニア・ハードウェアエンジニア等の各々持っている知見を同人誌という形で書籍に落とし込んで同人誌即売会で出展することが流行しており、エンジニア間の新たなコミュニティの形成や商業誌では得られないないような知見と出会えたりと様々な恩恵が得られる場です。\n当サービスでは書籍を執筆する際の様々な障壁を排除し、エンジニア間の知見共有を加速させてエンジニア市場のスキルの平均値を向上させていくことを目的として運営しております。",
      thumb: "/images/twitter_card.png",
    },
  ];

  return (
    <Container>
      <LinkList>
        {services.map(({ id, href, head, desc, thumb }) => (
          <Service key={id}>
            <Detail>
              <ThumbBox>
                <Thumb src={thumb} width="640" height="336" alt="Bmake" />
              </ThumbBox>
              <TextBox>
                <Head>{head}</Head>
                <Desc>
                  {desc.split("\n").map((txt) => (
                    <p key={txt}>{txt}</p>
                  ))}
                </Desc>
              </TextBox>
            </Detail>
            <LinkBox>
              <Link as="a" key={id} href={href} target="_blank">
                公式サイトへ
              </Link>
            </LinkBox>
          </Service>
        ))}
      </LinkList>
    </Container>
  );
};
