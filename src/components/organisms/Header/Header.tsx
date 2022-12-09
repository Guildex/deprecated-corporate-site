import * as React from "react";
import Link from "next/link";

import { Container, LogoLink, Logo, Navigation, NavLink } from "./styles";

export const Header: React.FC = () => {
  const links = [
    {
      id: 1,
      href: "service",
      text: "サービス",
    },
    {
      id: 2,
      href: "about",
      text: "会社概要",
    },
    {
      id: 3,
      href: "contact",
      text: "お問い合わせ",
    },
  ];

  return (
    <Container>
      <Link href="/">
        <LogoLink>
          <Logo src="/images/logo_white.png" />
        </LogoLink>
      </Link>
      <Navigation>
        {links.map(({ id, href, text }) => (
          <NavLink key={id} to={href} smooth>
            {text}
          </NavLink>
        ))}
      </Navigation>
    </Container>
  );
};
