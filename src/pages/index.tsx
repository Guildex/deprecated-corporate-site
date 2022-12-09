import { Layout } from "@/components/organisms";
import { ContactForm, Section, ServiceList } from "@/components/molecules";
import { CompanyProfile, KeyVisual } from "@/components/atoms";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <KeyVisual />
      <Section id="service" head="サービス">
        <ServiceList />
      </Section>
      <Section id="about" head="会社概要">
        <CompanyProfile />
      </Section>
      <Section id="contact" head="お問い合わせ">
        <ContactForm />
      </Section>
    </Layout>
  );
}
