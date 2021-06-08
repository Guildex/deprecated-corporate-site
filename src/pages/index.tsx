import { Layout } from '@/components/organisms';
import { Section } from '@/components/molecules'
import { CompanyProfile } from '@/components/atoms'
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <Section head="会社概要">
        <CompanyProfile />
      </Section>
      <Section head="事業内容" />
    </Layout>
  );
}
