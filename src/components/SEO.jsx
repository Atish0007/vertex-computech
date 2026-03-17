import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, url }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Local SEO */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune" />

    </Helmet>
  );
};

export default SEO;