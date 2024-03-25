import { Helmet } from "react-helmet";

const MetaTags = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="description"
        content={
          description ||
          "Fewa Store: The One-stop Shopping Destination. E-commerce is revolutionizing the way we all shop in Nepal."
        }
      />
      <meta
        name="keyword"
        content={
          keywords ||
          "Electronics,FewaStore,Pokhara, Best products, Best prices, Best quality,Bishal karki"
        }
      />
      <link rel="canonical" href="https://fs-admin-cms.vercel.app/" />
    </Helmet>
  );
};

export default MetaTags;
