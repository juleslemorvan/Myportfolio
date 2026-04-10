import Head from "next/head";

const Meta = ({ title, description, path }) => {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://juleslemorvan.vercel.app";
  const canonicalUrl = `${siteUrl}${path || ""}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}/julesPic.png`} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/julesPic.png`} />
      <meta name="twitter:creator" content="@juleslemorvan" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Jules Le Morvan — Développeur Front-end React",
  description:
    "Portfolio de Jules Le Morvan, développeur Front-end spécialisé React. Découvrez mes projets, compétences et contactez-moi.",
  path: "",
};

export default Meta;
