import Head from "next/head";

type MetaTagsProps = {
  description?: string;
  title?: string;
  keyworlds?: string;
};

export default function Meta({ description, title, keyworlds }: MetaTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/assets/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:url" content="https://www.example.pl" />
      <meta property="og:site_name" content="Example full name of page" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:title" content="default title" />
      <meta property="og:description" content="example description" />
      <meta name="keywords" content={keyworlds} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Default title",
  keywords: "keyworld, keyworld, keyworld",
  description: "default description",
};
