import Layout from '@/components/Layout/Layout';
import config from '@/lib/config';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';

const Home = () => {
  const t = useTranslations();

  return (
    <Layout>
      <NextSeo
        title={t('title')}
        description={t('description')}
        openGraph={{
          url: config.url,
          title: t('title'),
          description: t('description'),
          images: []
        }}
      />
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../translations/${locale}.json`)).default
    }
  };
}
export default Home;
