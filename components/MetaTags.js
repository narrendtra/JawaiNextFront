import Head from "next/head";
import { useRouter } from "next/router";

const MetaTags = ({ title, description, keywords }) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="all,follow" />
    </Head>
  );
};

export default MetaTags;
