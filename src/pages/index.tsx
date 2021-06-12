import { Layout } from '@/components/organisms';
import { ContactForm, Section, ServiceList } from '@/components/molecules'
import { CompanyProfile, Keyvisual } from '@/components/atoms'
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <Keyvisual />
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
