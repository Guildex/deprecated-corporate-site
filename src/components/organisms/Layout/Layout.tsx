import Head from "next/head";

import { GlobalStyle } from "@/components/atoms";
import { Header, Footer } from "@/components/organisms";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="root">
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"></meta>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
