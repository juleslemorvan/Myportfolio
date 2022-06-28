import Head from "next/head";


const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Jules Le Morvan - Portfolio",
  description:
    "Site personnel de Jules Le Morvan - Developpeur Front-End - Portfolio",
};

export default Meta;
